import Intro from "./main-componets/Intro";
import Services from "./main-componets/Services";

function Main () {
    return (
        <main className="flex flex-col gap-32">
            <Intro />
            <Services />
        </main>
    );
}

export default Main