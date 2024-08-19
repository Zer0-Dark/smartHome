import eclipse from "../assets/eclipseWhite.svg"

function SubscribeSection() {
    return (
        <div className="my-20 relative rounded-lg desktop:w-[80%] mx-auto bg-mainColor desktop:p-20 text-white flex justify-between desktop:flex-row flex-col p-10 " >
            <div className="desktop:w-2/3 desktop:mb-0 mb-8">
                <h1 className="text-4xl font-semibold mb-6">Subscribe to get updated</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
            </div>


            <button className=" w-fit h-fit px-14 py-4  border-2 border-white rounded-md hover:bg-white hover:text-textMainColor font-normal ">Get start</button>
            <img src={eclipse} className=" absolute bottom-0 right-4 z-20 " />
        </div>
    )
}

export default SubscribeSection