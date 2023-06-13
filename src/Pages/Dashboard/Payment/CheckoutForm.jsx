import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./CheckoutForm.css";

const CheckOutForm = ({ price, cart }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    }
    console.log("payment intent", paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment info to the server
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        classItems: cart.map((item) => item.itemId),
        status: "Service Pending",
        itemNames: cart.map((item) => item.class_name),
      };
      axiosSecure.post("/payment", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display confirm
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-end">
          <button
            className="mt-10 rounded-md bg-red-500 px-10 py-2 text-sm text-white transition hover:bg-opacity-90 active:bg-red-600"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>

      {cardError && (
        <div className="lg:w-3/4 mx-auto flex justify-center items-center gap-8 mt-5 rounded-md bg-red-100 px-10 py-2">
          <span>
            <FaTimesCircle className="text-lg text-red-500" />
          </span>
          <p className="text-red-500 text-xs font-medium text-center">
            {cardError}
          </p>
        </div>
      )}

      {transactionId && (
        <div className="lg:w-3/4 mx-auto flex justify-center items-center lg:gap-8 mt-5 rounded-md bg-green-100 px-3 py-2">
          <span>
            <FaCheckCircle className="text-lg text-green-500" />
          </span>
          <p className="text-green-500 text-xs font-medium text-center">
            Payment Successful. <br /> Your Transaction ID: {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
