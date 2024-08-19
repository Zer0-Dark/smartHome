import FooterItem from "./FooterItem"

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">

            <div className="flex desktop:flex-row flex-col my-16 desktop:px-36 px-6  gap-12">
                <div className="flex-1">
                    <h1 className="text-2xl text-textMainColor font-extrabold mb-8">Smart Home</h1>
                    <p className="mb-6 text-xs">Automate your entire healthcare hiring, on boarding and complaince
                        with a true tecnology platform
                    </p>
                    <div >
                        <input type="text" className="w-1/2 text-xs px-2 py-2" placeholder="Email Adress"></input>
                        <button className="ml-4 text-xs border-2 border-textMainColor text-textMainColor 
                        px-4 py-2 rounded-md hover:bg-textMainColor hover:text-white">Register</button>
                    </div>
                </div>
                <FooterItem title="CATEGORIES" list={["Product Mangement", "Design / Creatives", "Education & Trainging", "UI/UI Desginers", "Development", "Customer Support"]} />
                <FooterItem title="ABOUT" list={["Product Mangement", "Design / Creatives", "Education & Trainging", "UI/UI Desginers", "Development", "Customer Support"]} />
                <FooterItem title="Follow Us" list={["Product Mangement", "Design / Creatives", "Education & Trainging", "UI/UI Desginers"]} />

            </div>


            <div className="w-full h-20 bg-textSecondryColor flex justify-center items-center" >
                <h1 className=" text-white font-normal text-sm desktop:text-base ">Copyright &#169; 2021 all rights reserved smartHome </h1>
            </div>

        </footer>
    )
}

export default Footer