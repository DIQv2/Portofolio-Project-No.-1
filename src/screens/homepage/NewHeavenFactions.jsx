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
            {/* Æhre Faction */}
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

            {/* New Heaven Faction */}
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

            {/* Hyakuthen Faction */}
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
                        <div className="text-4xl drop-shadow-2xl text-shadow">Æhre</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center md:text-start">
                            The insurgence of the original citizens of the Iron Gates kingdom, rebelling against the
                            Sandorium
                            Empire’s suzerainity. They aim to overthrow the oppressive regime that has subjugated them
                            into
                            mere laborers.. Their name comes from the kingdom’s original name of Æhrein, meaning “Iron
                            Mountains” in their home language, dornohian. They are also known by as the “Army of
                            Liberation”.
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
        return(
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
                        <div className="text-4xl drop-shadow-2xl text-shadow">New Heaven</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center md:text-stat">
                            A radical ideologist organization, aiming to bring about the death of all the gods and the
                            birth of a new one, creating a world of absolute peace. They aim to bring peace by causing
                            absolute chaos, bringing about the reveal of Equilibrium, an object keeping the border
                            between the three worlds, the material world, the spirit world, and Heaven.
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
        return(
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
                            <img src={hyakuthenBrand} alt="hyakuthen brand" className="drop-shadow-2xl cursor-pointer invert"/>
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
                <div className="relative md:mr-[25%] h-full flex flex-col justify-center items-center text-white w-[90%] md:w-[40%] max-w-[500px] lg:mr-0">
                        <div className="text-4xl drop-shadow-2xl text-shadow">Hyakuthen</div>
                        <hr className="mt-4 mb-3 border-2 border-white w-full"/>
                        <div className="text-xl text-center">
                            The organized united army of all the kalzraaks in the Iron Gates kingdom and around, all
                            under the same leader, the Sangv’dhinaes. Formerly without a nation, the kalzraaks have all
                            been united under the same banner, the royal flag of Hyakuthen, the promised kingdom of the
                            kalzraaks.
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
