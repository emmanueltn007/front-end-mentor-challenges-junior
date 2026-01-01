function Features() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 max-md:px-8">
      <div>
        <img
          className="md:hidden"
          src="/images/illustration-laptop-mobile.svg"
          alt="illustration laptop mobile image"
        />
        <img
          className="max-md:hidden"
          src="/images/illustration-laptop-desktop.svg"
          alt="illustration laptop desktop image"
        />
      </div>
      <div className="flex flex-col gap-4 text-[hsl(208,49%,24%)] max-md:text-center">
        <div>
          <h2 className="text-xl font-semibold">Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
