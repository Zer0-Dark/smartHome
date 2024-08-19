import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import HeroIcons from "./HeroIcons";

function Nav() {
    const [menu, setMenu] = useState(false);

    // console.log(props.view)
    return (
        <nav className="text-white overflow-hidden flex justify-between items-center w-full px-10 desktop:px-36 py-8">
            {/* Desktop NavBar Start */}
            <div className=" overflow-hidden space-x-6 hidden desktop:block ">
                <motion.div
                    className={`cursor-pointer hover:text-textMainColor inline-block `}
                    initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                >Home</motion.div>
                <motion.div
                    className=" cursor-pointer hover:text-textMainColor inline-block"
                    initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                >About</motion.div>
                <motion.div
                    className=" cursor-pointer hover:text-textMainColor inline-block"
                    initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                >Testimonials</motion.div>
                <motion.div
                    className=" cursor-pointer hover:text-textMainColor inline-block"
                    initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                >Contact</motion.div>
            </div>
            <div className=" desktop:-translate-x-1/2">
                <h1 className="text-3xl font-bold">smartHome</h1>
            </div>
            <div className="hidden desktop:block z-10">
                <a href="#" className=" hover:text-textMainColor">Login</a>
                <a href="#" className="ml-6 bg-white px-6 py-3 rounded-md text-textSecondryColor font-normal shadow-xl hover:bg-textSecondryColor hover:text-white">Sign up</a>
            </div>
            {/* Destop Navbar End */}

            {/* Mobile NavBar Start */}
            {/* click menu */}
            <motion.div onClick={() => setMenu((prev) => !prev)}
                animate={menu ? "open" : "closed"}
                className={`desktop:hidden  w-10  cursor-pointer z-40 ${menu ? "fixed right-10  " : "relative"}`}>

                <motion.div style={{ left: "50%", top: -10, y: "-50%" }} className=" absolute inline   w-full h-1 bg-white"
                    variants={{
                        closed: { rotate: "0deg" },
                        open: { rotate: "50deg", transition: { delay: 0.25 } }
                    }}
                ></motion.div>

                <motion.div style={{ left: "50%", top: 0, y: "-50%" }} className=" inline absolute  w-full h-1 bg-white"
                    variants={{
                        closed: { rotate: "0deg" },
                        open: { rotate: "-50deg", top: -10, transition: { delay: 0.5 } }
                    }}
                ></motion.div>

                <motion.div style={{ left: "50%", top: 10, y: "-50%" }} className=" inline absolute  w-full h-1 bg-white"
                    variants={{
                        closed: { opacity: [0, 1] },
                        open: { opacity: [1, 0], top: 0, transition: { duration: 0.25 } }
                    }}
                ></motion.div>
            </motion.div>
            {/* end click menue */}

            {/* The nav */}
            <AnimatePresence>
                {
                    menu &&

                    <motion.div className=" fixed h-full w-full top-0 left-0 z-30 bg-mainColor p-5 flex flex-col overflow-hidden"
                        initial={{ scale: 0, opacity: 0, x: 300, borderRadius: "100%", y: -500 }}
                        animate={{ scale: 1, opacity: 1, x: 0, borderRadius: "0%", y: 0 }}
                        exit={{ scale: 0, opacity: 0, x: 300, borderRadius: "100%", y: -500 }}
                        transition={{ type: "just", duration: 1 }}
                    >
                        <div className="flex justify-between mb-10">
                            <h1 className="text-3xl font-bold">smartHome</h1>
                        </div>
                        <div className="flex flex-col gap-4 font-semibold ">
                            <a href="#" className=" hover:bg-white hover:text-textMainColor p-2 rounded-md  ">Home</a>
                            <a href="#" className=" hover:bg-white hover:text-textMainColor p-2 rounded-md  ">About</a>
                            <a href="#" className={`  hover:bg-white hover:text-textMainColor p-2 rounded-md `}>Testimonials</a>
                            <a href="#" className=" hover:bg-white hover:text-textMainColor p-2 rounded-md  ">Contact</a>
                            <a href="#" className=" hover:bg-white hover:text-textMainColor p-2 rounded-md  ">Login</a>
                            <a href="#" className=" hover:bg-white hover:text-textMainColor p-2 rounded-md  ">SignUp</a>
                        </div>
                        <div className=" mt-auto flex justify-center gap-10 relative">
                            <HeroIcons style="flex space-x-12 mb-4 items-center" />
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
            {/* End the nav bar */}
            {/* End mobile navbar */}
        </nav>
    )
}

export default Nav