import { motion } from "framer-motion"

function HeroShapes() {
    return (
        <div className=" desktop:block hidden">
            <div className="w-[1px] opacity-40 h-full absolute left-[14.2%] top-0 bg-white"></div>
            <motion.div initial={{ y: -300, x: -11 }} animate={{ y: 0, x: -11 }} transition={{ duration: 1.5 }} className="w-6 h-6 absolute -translate-x-1/2 rounded-full bg-mainColor top-[310px] left-[14.2%] border-white border-4"></motion.div>
            <div className="w-[1px] opacity-40 h-full absolute left-[28.57%] top-0 bg-white"></div>
            <div className="w-[1px] opacity-40 h-full absolute left-[42.8%] top-0 bg-white"></div>
            <div className="w-[1px] opacity-40 h-full absolute left-[57.14%] top-0 bg-white"></div>
            <div className="w-[1px] opacity-40 h-full absolute left-[71.428%] top-0 bg-white"></div>
            <motion.div initial={{ y: -400, x: -7 }} animate={{ y: 0, x: -7 }} transition={{ duration: 2 }} className="w-4 h-4 absolute -translate-x-1/2 rounded-full bg-green-500 top-[370px] left-[71.428%] border-white border-2"></motion.div>

            <div className="w-[1px] opacity-40 h-full absolute left-[85.714%] top-0 bg-white"></div>
            <motion.div initial={{ y: -100, x: -9 }} animate={{ y: 0, x: -9 }} transition={{ duration: 1 }} className="w-5 h-5 absolute -translate-x-1/2 rounded-full bg-white top-[100px] left-[85.714%] drop-shadow-xl shadow-xl"></motion.div>



        </div>
    )
}

export default HeroShapes