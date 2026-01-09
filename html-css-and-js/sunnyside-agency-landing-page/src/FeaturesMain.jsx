import Features from "./components/Features";
import features from "./data/features";

function FeaturesMain () {
    return (
        <>
            {features.map((feature, index) => (
                <Features
                    key={index} {...feature} />
            ))}
        </>
    );
}

export default FeaturesMain;