import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!validEmail.test(email)) {
      setError("Please enter a valid email");
      setSuccess("");
    }
    else {
      setError("");
      setSuccess("Email confirmation has been sent");

      setTimeout(() => {
        setSuccess("");
      }, 2500);

      setEmail("");
    }
  }
     
  return (
    <section className="rounded-md py-8 px-16 flex flex-col gap-4 text-white bg-[hsl(217,28%,15%)] shadow-xl shadow-gray-900 absolute left-8 right-8 md:left-56 md:right-56
                        bottom-0 z-100 translate-y-[calc(100%+4rem)]">
      <h2 className="text-2xl font-semibold">Get early access today</h2>
      <p className="text-xl md:text-md">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="flex flex-col md:flex-row gap-8" onClick={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email@example.com"
          className="outline-none bg-[hsl(0,0%,100%)] text-gray-500 rounded-4xl md:rounded-5xl px-8 py-4 md:py-2 md:w-full relative"
        />
        {error && (
          <p className="absolute bottom-4 left-24 text-[hsl(0,100%,63%)] text-xs font-semibold">{error}</p>
        )}
        {success && (
          <p className="absolute bottom-4 left-24 text-[hsl(107,100%,63%)] text-xs font-semibold">{success}</p>
        )}
        
        <button 
            type="submit"
            className="px-8 py-4 md:py-2 bg-[linear-gradient(90deg,hsl(176,68%,64%),hsl(198,60%,50%))] rounded-4xl font-bold cursor-pointer"
        >
          Get Started For Free
        </button>
      </form>
    </section>
  );
}

export default SignUp;
