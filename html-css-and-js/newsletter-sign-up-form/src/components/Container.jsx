import Form from "./Form";
import ImageCover from "./ImageCover";

function Container () {
  return (
    <main className="max-md:w-full grid max-md:grid-rows-[1fr_2fr] grid-cols-1 md:grid-cols-2 md:gap-4
                    bg-[hsl(0,81%,100%)] md:rounded-2xl md:p-4 lg:h-full overflow-hidden"
    >
      <ImageCover />
      <Form />
    </main>
  );
}

export default Container