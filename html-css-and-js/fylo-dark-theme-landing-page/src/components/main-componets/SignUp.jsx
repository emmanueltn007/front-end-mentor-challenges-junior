

function SignUp() {
     
  return (
    <section className="flex flex-col gap-8 text-white bg-[hsl(219,30%,18%)] shadow-xl shadow-gray-900">
      <h2 className="text-2xl font-semibold">Get early access today</h2>
      <p className="text-xl md:text-md">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="flex flex-col md:flex-row gap-8" type="submit">
        <input
          type="text"
          placeholder="email@example.com"
          className="bg-[hsl(0,0%,100%)] text-gray-500 rounded-4xl px-8 py-4"
        />
        <button 
            className="px-8 py-4 bg-[linear-gradient(90deg,hsl(176,68%,64%),hsl(198,60%,50%))] rounded-4xl font-bold cursor-pointer"
        >
          Get Started For Free
        </button>
      </form>
    </section>
  );
}

export default SignUp;
