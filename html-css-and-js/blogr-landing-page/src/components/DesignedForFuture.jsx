function DesignedForFuture() {
  return (
    <section className="px-8 max-md:text-center text-[hsl(208,49%,24%)] flex flex-col gap-8">
      <h2 className="text-xl font-semibold md:text-center">
        Designed for the future
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-8">
        <div>
          <img
            className="md:hidden"
            src="/images/illustration-editor-mobile.svg"
            alt="illustration editor mobile image"
          />
          <img
            className="max-md:hidden"
            src="/images/illustration-editor-desktop.svg"
            alt="illustration editor desktop image"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              Introducing an extensible editor
            </h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignedForFuture;
