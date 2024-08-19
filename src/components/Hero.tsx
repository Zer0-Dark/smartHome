import Nav from "./Nav"
import Title from "./Title"
import eclipse from "../assets/Ellipse 753.svg"
import HeroShapes from "./HeroShapes"
import mobiles from "../assets/mobiles.svg"
import HeroIcons from "./HeroIcons"



function Hero() {

    return (
        <div className="bg-mainColor h-[70vh] desktop:h-screen min-h-[550px] desktop:min-h-[700px] relative">
            <Nav />
            <Title />
            <img className="absolute  top-0 right-0" src={eclipse} alt="eclipse"></img>
            <HeroShapes />
            <img src={mobiles} alt="mobiles" className=" desktop:max-w-max max-w-96 absolute bottom-0 translate-y-1/2 left-[50%] -translate-x-1/2"></img>
            <HeroIcons style=" absolute bottom-20  left-[3%] space-y-10 desktop:block hidden z-30 " />
        </div>
    )
}

export default Hero