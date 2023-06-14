import { Helmet } from "react-helmet-async";
import usePayment from "../../hooks/usePayment";

const PaymentHistory = () => {
  const [payment] = usePayment();
  console.log(payment);

  return (
    <div>
      <Helmet>
        <title>The Language Space | Payment History</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Payment History
      </h2>
    </div>
  );
};

export default PaymentHistory;
