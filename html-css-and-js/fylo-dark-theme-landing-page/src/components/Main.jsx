import Intro from "./main-componets/Intro";
import Services from "./main-componets/Services";
import SignUp from "./main-componets/SignUp";
import StayProductive from "./main-componets/StayProductive";
import Testimonials from "./main-componets/Testimonials";

function Main () {
    return (
        <main className="flex flex-col gap-24 relative h-full w-full bg-[url('/images/bg-curvy-desktop.svg')] bg-cover bg-no-repeat bg-center">
            <Intro />
            <Services />
            <StayProductive />
            <Testimonials />
            <SignUp />
        </main>
    );
}

export default Main