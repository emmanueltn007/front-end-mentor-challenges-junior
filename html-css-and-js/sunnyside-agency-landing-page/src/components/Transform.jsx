function Transform () {
    return (
        <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="md:col-start-2">
                <img className="md:hidden" src="/images/mobile/image-transform.jpg" alt="transform image" />
                <img className="max-md:hidden" src="/images/desktop/image-transform.jpg" alt="transform image" />
            </div>
            <div className="text-center flex flex-col justify-center gap-8 p-8 md:row-start-1">
                <h2 className="text-2xl font-bold font-['Fraunces']">Transform your brand</h2>
                <p className="text-[hsl(232,10%,55%)] font-['Barlow']">
                    We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <button className="text-md font-bold font-['Fraunces']">LEARN MORE</button>
            </div>
        </section>
    );
}

export default Transform;