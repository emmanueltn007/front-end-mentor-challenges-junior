import Form from "./Form";
import ImageCover from "./ImageCover";

function Container () {
  return (
    <main className="bg-[hsl(0,0%,100%)] md:grid md:grid-cols-2 md:h-1/2">
      <ImageCover />
      <Form />
    </main>
  );
}

export default Container