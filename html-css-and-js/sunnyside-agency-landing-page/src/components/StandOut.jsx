function StandOut () {
    return (
        <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div>
                <img className="md:hidden" src="/images/mobile/image-stand-out.jpg" alt="stand out image" />
                <img className="max-md:hidden" src="/images/desktop/image-stand-out.jpg" alt="stand out image" />
            </div>
            <div className="text-center flex flex-col justify-center gap-8 p-8">
                <h2 className="text-2xl font-bold">Stand out to the right audience</h2>
                <p className="text-[hsl(232,10%,55%)]">
                    Use a combination of words and images to create a compelling visual experience that resonates with your target audience.
                </p>
                <button className="text-md font-bold">LEARN MORE</button>
            </div>
        </section>
    );
}

export default StandOut;