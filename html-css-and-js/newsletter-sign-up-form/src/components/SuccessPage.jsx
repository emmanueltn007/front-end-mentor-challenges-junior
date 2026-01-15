function SuccessPage () {
  return (
    <section className="bg-[hsl(0,0%,100%)]">
      <img src="/assets/images/icon-success.svg" alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to .... . Please open it and click the button inside it to
        confirm your subscription.
      </p>
      <button>
        Dismiss message
      </button>
    </section>
  );
}

export default SuccessPage