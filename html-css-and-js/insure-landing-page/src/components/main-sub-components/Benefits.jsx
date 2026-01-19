import benefitsItems from "../../utilities/benefits"

function Benefits () {
    return (
        <section className="flex flex-col gap-8 max-md:text-center px-8 md:px-16 lg:px-32 pt-48">
            <h1 className="text-5xl font-bold">We're Different</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {benefitsItems.map(({ icon, title, description }) => {
                    return (
                        <div className="flex flex-col gap-4" key={title}>
                            <img className="self-start max-md:mx-auto mb-4" src={icon} alt="benefits icons" />
                            <h2 className="font-semibold text-xl">{title}</h2>
                            <p className="text-[hsl(273,4%,51%)]">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Benefits