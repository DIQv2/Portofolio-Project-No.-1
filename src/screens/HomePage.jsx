import {homepageScreens} from "./homepage/homepageScreens";
import GrayBackground from "../assets/design/GrayBackground";

const HomePage = () => {
    return (
        <div className="w-screen h-[100dvh] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden hide-scrollbar scroll-smooth"
        >
            <GrayBackground />
            {homepageScreens.map((e, index) => (
                <div className="relative w-screen h-[100dvh] snap-center select-none z-10" key={index}>
                    {e}
                </div>
            ))}
        </div>
    );
};

export default HomePage;
