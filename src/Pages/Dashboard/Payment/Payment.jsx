import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-9/12 lg:w-1/2 mx-auto">
      <Helmet>
        <title>The Language Space | Payment</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Payment
      </h2>
      <div className="mt-10">
        <Elements stripe={stripePromise}>
          <CheckOutForm cart={cart} price={price}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
