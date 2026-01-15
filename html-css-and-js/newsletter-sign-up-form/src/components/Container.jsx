import Form from "./Form";
import ImageCover from "./ImageCover";

function Container () {
  return (
    <main className="max-md:w-full grid max-md:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-rows-[400px] md:gap-4 bg-[hsl(0,0%,100%)] md:rounded-2xl md:p-4 overflow-hidden"
    >
      <ImageCover />
      <Form />
    </main>
  );
}

export default Container