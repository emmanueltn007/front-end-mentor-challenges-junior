import images from "../data/galleryData";

function Gallery () {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4">
            {images.map((image) => {
                return (
                    <div key={image.alt}>
                        <img className="md:hidden w-full" src={image.src} alt={image.alt} />
                        <img className="max-md:hidden" src={image.md} alt={image.alt} />
                    </div>
                );
            })}
        </section>
    );
}

export default Gallery;