import newHeavenLogo from '../../assets/images/new-heaven-logo-with-shadow.png';
import {useState} from "react";
import CancelCircleIcon from "../../assets/icons/cancel-circle-stroke-rounded";

const NewHeaven = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveringImage, setHoveringImage] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        setHoveringImage(false);
    }

    const handleHoverImage = () => {
        if (!isOpen) setHoveringImage(true);
    }

    const handleEndHover = () => {
        if (!isOpen) setHoveringImage(false);
    }

    return (
        <div className="absolute w-full h-full overflow-hidden z-0">
            <div
                className={`absolute bg-jagged-peaks bg-cover -z-40
                    ${isOpen ? 'w-full h-full opacity-60' : 'w-full h-full opacity-80 grayscale'} transition-size-and-opacity duration-1000 `}
            />
            <div
                className={`flex flex-col md:flex-row justify-center items-center w-full h-full drop-shadow-2xl gap-8 transition-transform duration-300 
                ${isOpen ? "md:translate-x-[-10%]" : "translate-x-0"}`}>
                <img
                    src={newHeavenLogo}
                    className={`h-[80vw] transition-all duration-500 ${isOpen ? "md:h-[65vh]" : "md:h-[55vh] "} md:hover:h-[65vh] md:max-h-[30vw] rounded-full cursor-pointer drop-shadow-2xl`}
                    alt="newHeavenLogo"
                    onClick={handleClick}
                    onMouseEnter={handleHoverImage}
                    onMouseLeave={handleEndHover}
                />
                {!isOpen && (
                    <div className={`hidden md:inline bg-burning-city bg-cover absolute w-[70vh] h-full -z-10 border-r-4 border-l-4 shadow-2xl
                    ${hoveringImage ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}/>
                )}
                <div
                    className={`max-w-[90%] transition-all ease-out duration-500 ${isOpen ? "max-h-[60%] md:max-w-[30%] opacity-100" : "max-h-0 md:max-w-0 opacity-0"} overflow-hidden`}>
                    <div className="flex justify-between items-center">
                        <div
                            className="text-center w-[100%] md:text-start md:w-fit text-3xl text-white drop-shadow-2xl text-shadow">
                            What is Lorem Ipsum?
                        </div>
                        <CancelCircleIcon
                            className="hidden w-10 h-10 bg-transparent cursor-pointer rounded-full md:inline"
                            onClick={handleClick}/>
                    </div>
                    <hr className="mt-4 mb-3 border-2 border-white"/>
                    <div className="text-center md:text-start text-xl text-black">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewHeaven;
