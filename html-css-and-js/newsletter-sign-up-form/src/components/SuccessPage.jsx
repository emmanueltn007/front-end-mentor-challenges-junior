function SuccessPage () {
  return (
    <section className="bg-[hsl(0,0%,100%)] md:rounded-2xl flex flex-col gap-4 py-8 px-4 md:w-1/2">
      <img className="self-start" src="/assets/images/icon-success.svg" alt="success icon" />
      <h1 className="text-3xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to .... . Please open it and click the button inside it to
        confirm your subscription.
      </p>
      <button className="bg-[hsl(235,18%,26%)] text-[hsl(0,0%,100%)] font-semibold py-2 rounded-md
                          cursor-pointer max-md:mt-16">
        Dismiss message
      </button>
    </section>
  );
}

export default SuccessPage