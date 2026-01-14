import images from "../utilities/IllustrationImages";

function ImageCover () {
  return (
    <div className="h-full w-full overflow-hidden md:col-start-2 rounded-b-3xl md:rounded-xl">
      {images.map(({ image, style }) => {
        return (
          <img key={image} src={image} className={style} alt="illustration cover image" />
        );
      })}
    </div>
  );
}

export default ImageCover