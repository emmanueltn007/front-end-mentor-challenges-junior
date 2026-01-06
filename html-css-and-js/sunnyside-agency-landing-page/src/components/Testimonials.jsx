import clients from "../data/clientTestimonialsData";

function Testimonials() {
    return (
        <section>
            <h4 className="text-center">Client Testimonials</h4>
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
                            <p>{client.review}</p>
                            <div>
                                <h5>{client.name}</h5>
                                <p className="text-gray-400">{client.position}</p>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Testimonials;