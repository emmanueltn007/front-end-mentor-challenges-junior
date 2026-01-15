import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../utilities/listItems";

function Form () {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit (e) {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email)) {
      setError("Valid email required");
    }
    else {
      setEmail("");
      setError("");

      setTimeout(() => {
        navigate("/success")
      }, 3000)
    }
  }
  return (
    <div className="text-[hsl(235,18%,26%)] text-[hsl(4,100%,85%)] flex flex-col gap-4 md:row-start-1 md:col-start-1 max-md:p-4 md:justify-center md:px-8">
      <h1 className="text-3xl font-bold">
        Stay updated!
      </h1>
      <p className="">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul>
        {items.map((item) => {
          return (
            <li 
              key={item}
              className="relative pl-8 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[url('/assets/images/icon-list.svg')] before:bg-contain before:bg-no-repeat"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <form noValidate className="flex flex-col relative" onSubmit={handleSubmit}>
        <label 
          htmlFor="email-input"
          className="font-semibold text-xs"
        >
          Email address
        </label>
        {error && (
          <p className="absolute text-xs right-0 font-bold text-[hsl(4,100%,67%)]" >{error}</p>
        )}
        <input 
          className="border border-[hsl(0,0%,58%)] rounded-md py-2 px-4 mt-1"
          style={{
            color: error ? "hsl(4,100%,67%)" : "",
            borderColor: error ? "hsl(4,100%,67%)" : "",
            backgroundColor: error ? "hsl(4,100%,95%)" : ""
          }}
          type="email" 
          id="email-input" 
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="bg-[hsl(235,18%,26%)] text-[hsl(0,0%,100%)] font-semibold p-4 rounded-md cursor-pointer mt-4 hover:bg-[linear-gradient(90deg,hsl(4,100%,67%),hsl(17,100%,66%))] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)] transition-all duration-300 ease-in-out"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Form