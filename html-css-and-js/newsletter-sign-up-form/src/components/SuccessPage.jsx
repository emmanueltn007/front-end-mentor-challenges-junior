import { useNavigate } from "react-router-dom";

function SuccessPage ({ email }) {
  const prevPage = useNavigate();

  return (
    <section className="bg-[hsl(0,0%,100%)] md:rounded-2xl flex flex-col md:gap-4 max-md:justify-between pt-24 md:pt-8 p-8 md:w-1/2">
      <div className="flex flex-col gap-4">
        <img className="self-start" src="/assets/images/icon-success.svg" alt="success icon" />
        <h1 className="text-3xl font-bold">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to {email} Please open it and click the button inside it to
          confirm your subscription.
        </p>
      </div>
      <button 
        className="bg-[hsl(235,18%,26%)] text-[hsl(0,0%,100%)] font-semibold p-4 rounded-md cursor-pointer mt-4 hover:bg-[linear-gradient(90deg,hsl(4,100%,67%),hsl(17,100%,66%))] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)] transition-all duration-300 ease-in-out"
        onClick={() => prevPage("/")}
      >
        Dismiss message
      </button>
    </section>
  );
}

export default SuccessPage