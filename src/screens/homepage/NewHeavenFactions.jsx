import {useState} from "react";
import { CSSTransition } from 'react-transition-group';
import newHeavenBrand from "../../assets/images/new_heaven_brand.png";
import aehreBrand from "../../assets/images/aehre-brand.png";
import hyakuthenBrand from "../../assets/images/hyakuthen_brand.png";
import newHeavenLogo from '../../assets/images/new-heaven-logo-with-shadow.png';
import aehreSoldier from "../../assets/images/aehre-soldier.png";
import mask from "../../assets/images/mask-decoration.png";
import newHeavenSoldier from "../../assets/images/new_heaven_soldier.png";
import hyakuthenSoldier from "../../assets/images/hyakuten_soldier.png";
import flagDecoration from "../../assets/images/flag-decoration.png";

const NewHeavenFactions = () => {
    const [hoveredItem, setHoveredItem] = useState(-1);
    const [showDetails, setShowDetails] = useState(-1);

    const renderFactions = () => (
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
            <div
                className={`h-[25%] w-full md:h-[80%] md:w-[20%] relative flex justify-center items-center cursor-pointer md:border-l-2 border-white`}
                onMouseEnter={() => setHoveredItem(0)}
                onMouseLeave={() => setHoveredItem(-1)}
                onClick={() => setShowDetails(0)}
            >
                <div className={`absolute h-[100%] w-[100%] blur-sm ${hoveredItem === 0 ? "" : "md:blur-md md:grayscale"} md:transition-all md:duration-1000 bg-cover bg-center bg-burning-city`}>
                </div>
                <img src={aehreBrand} alt="aehre brand" className="max-h-[80%] z-10 drop-shadow-2xl"/>
            </div>

            <div
                className={`h-[25%] w-full md:h-[80%] md:w-[20%] relative flex justify-center items-center cursor-pointer md:border-l-2 md:border-r-2 border-white`}
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(-1)}
                onClick={() => setShowDetails(1)}
            >
                <div
                    className={`absolute h-[100%] w-[100%] blur-sm ${hoveredItem === 1 ? "" : "md:blur-md md:grayscale"} md:transition-all md:duration-1000 bg-cover bg-center bg-new-heaven`}>
                </div>
                <img src={newHeavenBrand} alt="new heavem brand" className="max-h-[80%] z-10 drop-shadow-2xl"/>
            </div>

            <div
                className={`h-[25%] w-full md:h-[80%] md:w-[20%] relative flex justify-center items-center cursor-pointer md:border-r-2 border-white`}
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(-1)}
                onClick={() => setShowDetails(2)}
            >
                <div className={`absolute h-[100%] w-[100%] blur-sm ${hoveredItem === 2 ? "" : "md:blur-md md:grayscale"} md:transition-all md:duration-1000 bg-cover bg-center bg-hyakuthen`}>
                </div>
                <img src={hyakuthenBrand} alt="hyakuthen brand" className="max-h-[80%] z-10 drop-shadow-2xl"/>
            </div>
        </div>
    );

    const renderAeire = () => {
        return(
            <div className="h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-burning-town bg-cover bg-center z-0 opacity-20" />
                <div className="absolute top-8 left-4 w-[15vw] h-[15vw] z-30 rounded-full flip-card bg-transparent"
                     onClick={()=>{setShowDetails(-1)}}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={aehreBrand} alt="aehre brand" className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                        <div className="flip-card-back">
                            <img src={newHeavenLogo} alt="new heaven logo" className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full h-full justify-center md:justify-start items-center z-20 gap-16">
                    <div
                        className="relative h-full w-[90%] flex flex-col justify-center items-center md:items-start text-white md:w-[40%] max-w-[500px] md:ml-[15%]">
                        <div className="text-4xl drop-shadow-2xl text-shadow">Why do we use it?</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center md:text-start">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </div>
                    <div className="h-[60%] w-fit relative items-center hidden md:flex">
                        <img src={aehreSoldier} alt="aehre soldier" className="h-full drop-shadow-2xl z-20"/>
                        <img src={aehreSoldier} alt="aehre soldier"
                             className="drop-shadow-2xl grayscale opacity-50 h-[150%] -ml-[160px] z-10"/>
                    </div>
                </div>
                <div className="absolute bottom-[10px] right-[10px] z-0">
                    <img src={mask} alt="mask" className="invert opacity-50"/>
                </div>
            </div>
        )
    }
    const renderNewHeaven = () => {
        return (
            <div className="h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-new-heaven-main bg-cover bg-center z-0 opacity-20" />
                <div
                    className="absolute top-8 left-4 w-[15vw] h-[15vw] z-30 rounded-full flip-card bg-transparent"
                    onClick={()=>{setShowDetails(-1)}}
                >
                    <div className={"flip-card-inner"}>
                        <div className="flip-card-front">
                            <img src={newHeavenBrand} alt="new heaven brand" className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                        <div className="flip-card-back">
                            <img src={newHeavenLogo} alt="new heaven logo" className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full h-full justify-center md:justify-start items-center z-20 gap-16">
                    <div
                        className="relative h-full w-[90%] flex flex-col justify-center items-center md:items-start text-white md:w-[40%] max-w-[500px] md:ml-[15%]">
                        <div className="text-4xl drop-shadow-2xl text-shadow">Where does it come from?</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center md:text-stat">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source.
                        </div>
                    </div>
                    <div className="h-[60%] w-fit relative items-center hidden md:flex">
                        <img src={newHeavenSoldier} alt="new heaven member" className="h-full drop-shadow-2xl z-20"/>
                        <img src={newHeavenSoldier} alt="new heaven member"
                             className="drop-shadow-2xl grayscale opacity-50 h-[150%] -ml-[160px] z-10"/>
                    </div>
                </div>
            </div>
        )
    }
    const renderHyakuthen = () => {
        return (
            <div className="h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-battlefield bg-cover bg-center z-0 opacity-40"/>
                <div
                    className="absolute top-8 left-4 w-[15vw] h-[15vw] z-30 rounded-full flip-card bg-transparent"
                    onClick={() => {
                        setShowDetails(-1)
                    }}
                >
                    <div className={"flip-card-inner"}>
                        <div className="flip-card-front">
                            <img src={hyakuthenBrand} alt="hyakuthen brand"
                                 className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                        <div className="flip-card-back">
                            <img src={newHeavenLogo} alt="new heaven logo" className="drop-shadow-2xl cursor-pointer invert"/>
                        </div>
                    </div>
                </div>
                <div className="absolute h-full w-full overflow-hidden">
                    <div className="absolute left-[200px] hidden md:inline">
                        <img src={flagDecoration} alt="flag decoration" className="invert"/>
                    </div>
                </div>
                <div className="relative flex w-full h-full items-center z-20 gap-16 justify-center">
                    <div
                        className="relative md:mr-[25%] h-full flex flex-col justify-center items-center text-white w-[90%] md:w-[40%] max-w-[500px] lg:mr-0">
                        <div className="text-4xl drop-shadow-2xl text-shadow">Where can I get some?</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                            with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                            non-characteristic words etc.
                        </div>
                    </div>
                </div>
                <img src={hyakuthenSoldier} alt="hyakuthen soldier"
                     className="absolute bottom-0 right-0 h-[80%] drop-shadow-2xl z-20 hidden md:inline"/>
                <img src={hyakuthenSoldier} alt="hyakuthen soldier"
                     className="absolute bottom-0 -right-[180px] drop-shadow-2xl grayscale opacity-50 h-full z-10 hidden md:inline"/>
            </div>
        )
    }

    return (
        <div className="w-full h-full bg-black">
            <CSSTransition
                in={showDetails === -1}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                {renderFactions()}
            </CSSTransition>

            <CSSTransition
                in={showDetails === 0}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                {renderAeire()}
            </CSSTransition>

            <CSSTransition
                in={showDetails === 1}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                {renderNewHeaven()}
            </CSSTransition>

            <CSSTransition
                in={showDetails === 2}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                {renderHyakuthen()}
            </CSSTransition>
        </div>
    );
};

export default NewHeavenFactions;
