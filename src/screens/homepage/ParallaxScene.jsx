import {useEffect} from "react";
import Parallax from "parallax-js/dist/parallax";
import layer1 from "../../assets/images/burning-city-layer-1.png";
import layer2 from "../../assets/images/burning-city-layer-2.png";
import layer3 from "../../assets/images/burning-city-layer-3.png";
import layerB1 from "../../assets/images/burning-city-layer-b1.png";
import layerB2 from "../../assets/images/burning-city-layer-b2.png";
import layerB3 from "../../assets/images/burning-city-layer-b3.png";

const ParallaxScene = () => {
    useEffect(() => {
        // Set up Parallax after the component is rendered
        let scene = document.getElementById('scene2');
        new Parallax(scene);
    }, []);

    return (
        <div className="absolute w-full h-full overflow-hidden">
            <div id="scene2" className="absolute w-[120%] -left-[10%] h-[120%] -top-[10%] overflow-hidden">
                <div className="w-full h-full bg-burning-city-large bg-cover bg-center"/>
                <div className="absolute w-full h-full" data-depth={0.1}>
                    <img src={layerB3} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
                <div className="absolute w-full h-full" data-depth={0.15}>
                    <img src={layer3} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
                <div className="absolute w-full h-full" data-depth={0.2}>
                    <img src={layerB2} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
                <div className="absolute w-full h-full" data-depth={0.23}>
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col gap-4 justify-center items-center max-w-[350px]">
                            <div className="text-white text-5xl md:text-[4rem] font-bold text-shadow drop-shadow-2xl shadow-white">
                                Feinhdall
                            </div>
                            <hr className="border-[3px] border-white w-full"/>
                            <div className="text-2xl text-white text-center">
                                The start of the revolution.
                                <br/>
                                "Through the clouds of the night sky, spheres of fire start to fall upon the city. As everything was descending into chaos, one single crying
                                whisper could be heard...
                                <br/>
                                'She is here'
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-full" data-depth={0.25}>
                    <img src={layer2} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
                <div className="absolute w-full h-full" data-depth={0.3}>
                    <img src={layerB1} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
                <div className="absolute w-full h-full" data-depth={0.35}>
                    <img src={layer1} alt="" className="h-full md:w-full object-cover" loading="lazy"/>
                </div>
            </div>
        </div>
    );
};

export default ParallaxScene;
