import Swal from "sweetalert2";

const Feedback = ({ singleClass, setShowModal, refetch }) => {
  const handleSendFeedback = (event, singleClass) => {
    console.log(singleClass);
    event.preventDefault();

    const form = event.target;
    const feedback = form.elements.feedback.value;
    console.log(feedback);

    fetch(`http://localhost:5000/classes/feedback/${singleClass._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md lg:p-12">
          <form
            onSubmit={(event) => handleSendFeedback(event, singleClass)}
            className="space-y-4"
          >
            <div>
              <h2 className="text-xl font-semibold tracking-tighter text-gray-900 sm:text-3xl">
                Feedback Form
              </h2>
            </div>

            <div>
              <label className="sr-only" htmlFor="feedback">
                Feedback
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Write your feedback here..."
                rows="8"
                name="feedback"
                id="feedback"
              ></textarea>
            </div>

            <div className="mt-4 flex justify-start items-center gap-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-red-100 active:bg-red-200 px-5 py-3 font-medium text-green-500 sm:w-auto"
              >
                Send Feedback
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="inline-block w-full rounded-lg bg-base-200 active:bg-base-300 px-5 py-3 font-medium text-black sm:w-auto"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
