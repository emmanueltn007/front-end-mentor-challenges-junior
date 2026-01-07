import clients from "../data/clientTestimonialsData";

function Testimonials() {
    return (
        <section className="flex flex-col gap-16 p-24">
            <h4 className="text-center text-[hsl(210,4%,67%)] text-lg font-bold tracking-[1rem]">Client Testimonials</h4>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
                {clients.map((client) => {
                    return (
                        <div 
                            key={client.name} 
                            className="flex flex-col items-center text-center gap-8"
                        >
                            <img 
                                className="h-20 md:h-16 w-auto rounded-full"
                                src={client.avatar} 
                                alt={client.name} 
                            />
                            <p className="text-[hsl(212,27%,19%)] text-sm">{client.review}</p>
                            <div>
                                <h5 className="text-[hsl(212,27%,19%)] font-bold text-md">{client.name}</h5>
                                <p className="text-gray-400 text-sm">{client.position}</p>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Testimonials;