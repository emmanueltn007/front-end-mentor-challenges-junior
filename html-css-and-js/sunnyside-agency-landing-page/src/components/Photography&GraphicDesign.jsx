function PhotographyGraphicDesign() {
    return (
        <section className="grid grid-rows-[500px_500px] md:grid-rows-[500px] md:grid-cols-2">
            <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] md:bg-[url('/images/desktop/image-graphic-design.jpg')] 
                            bg-center bg-no-repeat bg-cover flex flex-col text-center justify-end gap-4 p-16">
                <h3 className="text-xl font-bold">Graphic Design</h3>
                <p className="text-[hsl(212,27%,19%)]">
                    Great design makes you memorable. We deliver artwork that
                    underscores your brand message and captures potential clients'
                    attention.
                </p>
            </div>
            <div className="bg-[url('/images/mobile/image-photography.jpg')] md:bg-[url('/images/desktop/image-photography.jpg')] 
                            bg-center bg-no-repeat bg-cover flex flex-col text-center justify-end gap-4 p-16">
                <h3 className="text-xl font-bold">Photography</h3>
                <p className="text-[hsl(212,27%,19%)]">
                    Increase your credibility by getting the most stunning,
                    high-quality photos that improve your business image.
                </p>
            </div>
        </section>
    );
}

export default PhotographyGraphicDesign;