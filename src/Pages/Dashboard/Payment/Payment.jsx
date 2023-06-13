import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>The Language Space | Payment</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Payment
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
