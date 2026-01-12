import Intro from "./main-componets/Intro";
import Services from "./main-componets/Services";
import StayProductive from "./main-componets/StayProductive";

function Main () {
    return (
        <main className="flex flex-col gap-32">
            <Intro />
            <Services />
            <StayProductive />
        </main>
    );
}

export default Main