import Intro from "./main-componets/Intro";
import Services from "./main-componets/Services";
import StayProductive from "./main-componets/StayProductive";
import Testimonials from "./main-componets/Testimonials";

function Main () {
    return (
        <main className="flex flex-col gap-16">
            <Intro />
            <Services />
            <StayProductive />
            <Testimonials />
        </main>
    );
}

export default Main