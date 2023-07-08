import { Helmet } from "react-helmet-async";
import usePayment from "../../hooks/usePayment";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [payment] = usePayment();
  console.log(payment);

  const sortedPayment = payment.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <Helmet>
        <title>The Language Space | Payment History</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Payment History
      </h2>

      <div>
        <div className="overflow-x-auto mt-14 rounded-md shadow-md text-gray-500">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr className="text-center">
                <th>Date</th>
                <th>Billing Info</th>
                <th>Items</th>
                <th>Quantity</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedPayment.map((pay) => (
                <tr key={pay._id} className="text-center text-xs">
                  <td>
                    {new Date(pay.date)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </td>
                  <td>
                    {pay.name}
                    <br />
                    <span className="badge badge-ghost badge-sm text-gray-500">
                      {pay.email}
                    </span>
                  </td>
                  <td>
                    {pay.itemNames.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </td>
                  <td>{pay.quantity}</td>
                  <td>
                    <div className="badge badge-sm bg-green-100 text-green-500">
                      {pay.transactionId}
                    </div>
                  </td>
                  <td>
                    <div>${pay.price}</div>
                  </td>
                  <td>
                    <div className="badge badge-sm h-full rounded bg-red-100 text-red-500">
                      {pay.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
