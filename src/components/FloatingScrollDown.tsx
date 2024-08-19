import arrowDown from "../assets/arrowDown.svg"
import behindArrow from "../assets/behindArrowShape.svg"
import { motion } from "framer-motion"
function FloatingScrollDown() {
    return (

        <div>
            <motion.div initial={{ y: -10 }} animate={{ y: 0 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }} className=" z-10 absolute top-20 desktop:top-16 desktop:right-16 right-4  desktop:bg-white drop-shadow-lg desktop:px-4 desktop:py-4">
                <img src={arrowDown} alt="arrow"></img>
            </motion.div>
            <div className="hidden w-40 desktop:block absolute top-20 right-20 translate-x-1/2 -translate-y-1/2">
                <img src={behindArrow} alt="" />
            </div>
        </div>
    )
}

export default FloatingScrollDown