import grayWallpaper from "../../assets/images/gray-wallpaper.jpg";
import InstagramIcon from "../../assets/icons/instagram-stroke-rounded";
import YoutubeIcon from "../../assets/icons/youtube-stroke-rounded";
import Mouse01Icon from "../../assets/icons/mouse-01-stroke-rounded";
import {renderCurrentDate} from "../../utils/functions/renderCurrentDate";
const LandingScreen = () => {
    return(
        <div className="w-full h-full">
            <img src={grayWallpaper} alt="" className="absolute w-full h-full -z-10 bg-cover opacity-80"/>
            <div
                className="absolute w-full h-full bg-stripes-texture z-30 opacity-40 bg-[length:200px_200px] animate-move-background pointer-events-none"/>
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col justify-center items-center gap-8">
                    <div
                        className="text-5xl md:text-8xl text-center cursor-pointer text-shadow font-bold md:hover:text-white transition-colors duration-500">
                        Portofolio
                    </div>
                    <hr className="border-2 border-black w-full"/>
                    <div className="text-5xl cursor-pointer text-shadow font-bold md:hover:text-white transition-colors duration-500">
                        Michael B.
                    </div>
                </div>
            </div>

            <div className="absolute top-0 md:top-[20px] md:right-[20px]">
                <div className="flex md:flex-col justify-center items-center">
                    <a href="/" className="relative w-12 h-12 cursor-pointer">
                    <InstagramIcon className="w-full h-full invert"/>
                    </a>
                    <a href="/" className="relative w-12 h-12 cursor-pointer">
                        <YoutubeIcon className="w-full h-full invert"/>
                    </a>
                </div>
            </div>

            <div className="absolute top-[5px] right-[5px] md:top-[20px] md:left-[20px] w-full h-fit">
                <div className="flex justify-end w-full h-fit items-start md:justify-start">
                    <div className="flex flex-col p-2 md:border-2 border-black rounded-2xl bg-gray-wallpaper bg-cover">
                        <div className="hidden text-black text-2xl font-bold text-center md:inline">
                            {renderCurrentDate()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[10px] left-[10px] text-lg font-bold z-[100] md:text-3xl">
                V 1.0.0
            </div>

            <div className="hidden md:inline absolute bottom-[40px] right-[50%] text-end w-14 h-14">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full animate-bounce">
                        <Mouse01Icon className=" w-full h-full rotate-180"/>
                    </div>
                    <div className="text-black text-2xl font-bold">
                        Scroll
                    </div>
                </div>
            </div>

            <a href="https://ililith.netlify.app/" target="_blank" rel="noreferrer" className="absolute bottom-[10px] right-[20px] text-end text-lg text-white">
                Link to original page (also made by me)
            </a>
        </div>
    )
}

export default LandingScreen;