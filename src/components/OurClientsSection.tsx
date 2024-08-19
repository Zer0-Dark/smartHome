import SectionTitle from "./SectionTitle"
import eclipse from "../assets/eclipse2.svg"
import Client from "./Client";
import logo1 from "../assets/Logo.svg"
import logo2 from "../assets/Logo1.svg"
import logo3 from "../assets/Logo2.svg"
import logo4 from "../assets/Octane Fitness logo 1.svg"
import logo5 from "../assets/cybex-international-logo-vector 1.svg"
import logo6 from "../assets/true-fitness-vector-logo 1.svg"
import logo7 from "../assets/precor-incorporated-vector-logo 1.svg"
import logo8 from "../assets/Group 6.svg"



function OurClientsSection() {
    return (
        <div className=" relative mb-8">
            <img src={eclipse} alt="eclipse" className=" absolute -top-16 right-0 rotate-180 desktop:block hidden" ></img>
            <SectionTitle title="Our Clients" paragraph="Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage." />
            <div className=" flex flex-wrap gap-6 justify-center desktop:mx-36 mt-4 ">
                <Client clientLogo={logo1} />
                <Client clientLogo={logo2} />
                <Client clientLogo={logo3} />
                <Client clientLogo={logo4} />
                <Client clientLogo={logo5} />
                <Client clientLogo={logo6} />
                <Client clientLogo={logo7} />
                <Client clientLogo={logo8} />

            </div>

        </div>
    )
}

export default OurClientsSection;