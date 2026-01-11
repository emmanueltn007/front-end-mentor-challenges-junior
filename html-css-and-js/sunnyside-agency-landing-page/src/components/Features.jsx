function Features ({ title, description, mobileImage, desktopImage, alt, reverse, accent }) {
     
    return (
        <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            {/* IMAGE SECTION */}
            <div className={reverse ? "md:col-start-2" : ""}>
                <img className="md:hidden" src={mobileImage} alt={alt} />
                <img className="max-md:hidden" src={desktopImage} alt={alt} />
            </div>

            {/* TEXT SECTION */}
            <div className={`text-center flex flex-col justify-center gap-8 p-8 ${reverse ? 'md:row-start-1' : ''}`}>
                <h2 className="text-2xl font-bold font-['Fraunces']">{title}</h2>
                <p className="text-[hsl(232,10%,55%)] font-['Barlow']">{description}</p>

                
                <button   
                    className={`relative inline-block text-md font-extrabold font-['Fraunces'] w-fit mx-auto
                                z-10 after:content-[''] after:absolute after:bottom-0.5 after:w-full
                                after:left-0 after:h-2 after:rounded-3xl after:-z-10 after:opacity-40
                                ${accent === "yellow" ? "after:bg-[hsl(51,100%,49%)]" : "after:bg-[hsl(7,99%,70%)]"}`}
                >
                    LEARN MORE
                </button>
                
            </div>
        </section>
    );
}

export default Features;