import AppDownloadLinks from "./AppDownloadLinks"
import mock from "../assets/mock1.png"
function DownloadAppSection() {
    return (
        <div className="flex desktop:flex-row flex-col w-full justify-center items-center gap-0 desktop:px-28 px-5 ">
            <div className="flex flex-col  desktop:w-[45%] desktop:order-first order-last  ">
                <h1 className="desktop:text-6xl text-4xl text-textMainColor font-bold desktop:mb-8 mb-2">Download APP</h1>
                <p className="desktop:mb-8 mb-4">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
               <div className="w-full flex justify-center">
               <AppDownloadLinks />
               </div>
            </div>
            <div className="desktop:w-[45%] ">
                <img src={mock} alt="phone" className="drop-shadow-2xl shadow-2xl desktop:h-[550px] desktop:translate-x-2/3 desktop:mb-0 mb-10 h-[350px] "></img>
            </div>
        </div>
    )
}

export default DownloadAppSection