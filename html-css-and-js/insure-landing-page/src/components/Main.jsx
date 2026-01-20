import Benefits from "./main-sub-components/Benefits";
import Intro from "./main-sub-components/Intro";
import MoreInfo from "./main-sub-components/MoreInfo";

function Main () {
    return (
        <main className="max-md:bg-[url('/images/bg-pattern-intro-right-mobile.svg')] md:bg-[url('/images/bg-pattern-intro-left-desktop.svg')] bg-size-[150px] bg-no-repeat bg-right md:bg-left">
            <Intro />
            <Benefits />
            <MoreInfo />
        </main>
    );
}

export default Main