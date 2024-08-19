import SectionTitle from "./SectionTitle"
import handDraw from "../assets/handDraw.svg"
import Faq from "./Faq"
import { useState } from "react"
import eclipseSolid from "../assets/eclipse-solid.svg"


const faqs = [{ id: 1, ques: "Chamber reached do he nothing be?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
{ id: 2, ques: "Chamber reached do he nothing be?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
{ id: 3, ques: "At by pleasure of children be?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
{ id: 4, ques: "Amounted repeated as believed in confined?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." }]



const FaqSection = function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);
    function handleOpen(id: number) {
        if (openIndex == id) {
            return setOpenIndex(0);
        } else {
            setOpenIndex(id);

        }
    }


    const faqsList = faqs.map((faq) => <Faq handleOpen={handleOpen} id={faq.id} ques={faq.ques} open={openIndex == faq.id} key={faq.id} answer={faq.answer} />)

    return (
        <div className=" relative mb-20 ">
            <SectionTitle title="FAQ's" />
            <img className=" desktop:-z-10 absolute desktop:-top-44 desktop:right-0 desktop:w-[45%] w-[60%] top-[4.5rem] -right-7 desktop:block hidden " src={handDraw}></img>
            <div className="felx space-y-5 flex-col desktop:w-[60%] w-[85%] mx-auto">
                {faqsList}
            </div>
            <img className=" desktop:block hidden absolute -bottom-24 left-0" src={eclipseSolid} alt="eclipse"></img>
        </div>
    )
}

export default FaqSection