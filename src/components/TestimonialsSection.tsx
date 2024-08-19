import SectionTitle from "./SectionTitle"
import TestimonialsTab from "./TestimonialsTab"
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import slider from "../assets/slider nav.png"


function TestimonialsSection() {
    return (
        <div>
            <SectionTitle title="Testimonials" paragraph="Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage." />

            <div className="flex flex-wrap gap-3 justify-center desktop:mx-36 mt-4 ">
                <TestimonialsTab paragraph=" our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions" name="Cham" photo={person1} job="Product designer" />
                <TestimonialsTab paragraph="We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured" name="Scopic Software" photo={person2} job="Custom IT Solutions Firm" />
                <TestimonialsTab paragraph="It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done." name="Russell Lee" photo={person3} job="Writer" />
                <TestimonialsTab paragraph="At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients." name="Solace Engineers Inc." photo={person4} job="Engineering Firm" />
            </div>
            <img className=" mx-auto  mb-8 mt-16 " src={slider}></img>
        </div>
    )
}

export default TestimonialsSection