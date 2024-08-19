import AppDownloadLinks from "./AppDownloadLinks"
import FloatingScrollDown from "./FloatingScrollDown"
import handDraw from "../assets/handDraw.svg"
import SectionTitle from "./SectionTitle"
import eclipse from "../assets/eclipse2.svg"
import AboutUsTap from "./AboutUsTap"
import mock1 from "../assets/mock1.png"
import mock2 from "../assets/mock2.png"
import mock3 from "../assets/mock3.png"

function About() {
    return (
        <div className="desktop:pt-80 pt-32 relative w-full overflow-hidden">
            <div className=" flex justify-center">

                <AppDownloadLinks />
            </div>



            <FloatingScrollDown />




            <img className=" desktop:-z-10 absolute desktop:top-32 desktop:-right-5 desktop:w-[auto] w-[60%] top-[4.5rem] -right-7 " src={handDraw}></img>

            <img src={eclipse} className=" absolute top-80 hidden desktop:block" alt="eclipse"></img>

            <SectionTitle title="About us" />
            <div className="flex flex-col mt-12">
                <AboutUsTap title="Smart Home's Smart Services" paragraph="Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage." mock={mock1} reverse={false} />

                <AboutUsTap title="What app can do to your Appliences?" paragraph="Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage." mock={mock2} reverse={true} />

                <AboutUsTap title="Control Electric Appliences" paragraph="Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage." mock={mock3} reverse={false} />
            </div>


        </div>
    )
}

export default About