import services from "../data/services";

function PhotographyGraphicDesign() {
  return (
    <section className="grid grid-rows-[500px_500px] md:grid-rows-[500px] md:grid-cols-2">
      {services.map(({ title, mobile_bg, desktop_bg, description }) => (
        <div
          key={title}
          style={{
            '--mobile-bg': `url(${mobile_bg})`,
            '--desktop-bg': `url(${desktop_bg})`,
            backgroundImage: 'var(--mobile-bg)',
          }}
          className="md:[background-image:var(--desktop-bg)]
                            bg-center bg-no-repeat bg-cover flex flex-col text-center justify-end gap-4 p-16"
        >
          <h3 className="text-xl font-bold font-['Fraunces']">{title}</h3>
          <p className="text-[hsl(212,27%,19%)] font-['Barlow']">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default PhotographyGraphicDesign;
