import Intro from "./main-componets/Intro";
import Services from "./main-componets/Services";
import SignUp from "./main-componets/SignUp";
import StayProductive from "./main-componets/StayProductive";
import Testimonials from "./main-componets/Testimonials";

function Main () {
    return (
        <main className="flex flex-col gap-24 relative">
            <Intro />
            <Services />
            <StayProductive />
            <Testimonials />
            <SignUp />
        </main>
    );
}

export default Main