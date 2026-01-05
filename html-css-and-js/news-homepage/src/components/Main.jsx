import BrightFuture from "./main-components/BrightFuture";
import New from "./main-components/New";
import Tech from "./main-components/Tech"

function Main () {
    return (
        <main className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-4">
                <BrightFuture />
                <New />
            </div>
            <Tech />
        </main>
    );
}

export default Main