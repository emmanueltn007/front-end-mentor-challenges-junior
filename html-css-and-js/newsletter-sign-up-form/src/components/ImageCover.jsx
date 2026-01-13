function ImageCover () {
  return (
    <div className="md:col-start-2">
      <img className="block md:hidden w-full" src="/assets/images/illustration-sign-up-mobile.svg" alt="illustration cover image" />
      <img className="hidden md:block lg:hidden" src="/assets/images/illustration-sign-up-tablet.svg" alt="illustration cover image" />
      <img className="hidden lg:block" src="/assets/images/illustration-sign-up-desktop.svg" alt="illustration cover image" />
    </div>
  );
}

export default ImageCover