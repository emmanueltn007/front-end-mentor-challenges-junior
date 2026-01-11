import services from "../../utilities/servicesItems";

function Services () {
    return (
        <section className="text-[hsl(0,0%,100%)] grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-40">
            {services.map((service, serviceIndex) => {
                return (
                    <div 
                        key={serviceIndex} 
                        className="text-center flex flex-col items-center gap-4">
                        <img src={service.image} alt={service.alt} className="mb-4" />
                        <h2 className="text-2xl font-semibold">{service.title}</h2>
                        <p className="text-xl md:text-md">{service.description}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default Services