import testimonials from "../../utilities/customerTestimonials.js"

function Testimonials () {
    return (
        <section 
            className="text-[hsl(0,0%,100%)] grid grid-cols-1 md:grid-cols-3 gap-8  py-8 px-12 md:px-16 relative"
        >
            <img 
                className="absolute z-5 top-0 md:top-2 left-14 h-8"
                src="/images/bg-quotes.png" 
                alt="quotes image" 
            />
            {testimonials.map(({ testimonial_message, avatar, alt, customer, position }) => {
                return (
                    <div className="flex flex-col gap-4 bg-[hsl(218,32%,24%)] rounded-md p-4 z-15" key={customer}>
                        <p className="text-md">
                            {testimonial_message}
                        </p>
                        <div className="flex items-center gap-4">
                            <div>
                                <img className="h-8 rounded-full" src={avatar} alt={alt} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-md font-bold">{customer}</span>
                                <span className="text-xs">{position}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Testimonials