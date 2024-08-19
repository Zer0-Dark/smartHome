
type Props = {
    title: string,
    paragraph: string,
    mock: string,
    reverse: boolean
}

function AboutUsTap({ title, paragraph, mock, reverse }: Props) {

    return (
        <div className={`flex flex-col desktop:flex-row px-5 desktop:min-h-max min-h-[600px] mb-8  desktop:mb-24 desktop:px-36 gap-20 ${reverse ? "desktop:flex-row-reverse " : ""}`} >

            {/* Mobile */}
            <div className="desktop:w-1/2 desktop:h-auto h-[200px]  relative flex flex-col-reverse  ">
                <img className=" absolute left-[50%] -translate-x-1/2 -bottom-12 max-h-72  desktop:max-h-[125%] drop-shadow-2xl shadow-2xl" src={mock} alt="phone"></img>
                <div className=" desktop:h-[50%] h-[60%] w-[70%] mx-auto rounded-md   desktop:translate-x-0  -z-10 desktop:w-full bg-mainColor"></div>
            </div>
            {/* title and info */}
            <div className="desktop:w-1/2 pb-10 ">
                <h1 className="text-4xl desktop:pr-36 font-bold text-textSecondryColor mb-4">{title}</h1>
                <p className=" desktop:pr-36 font-light text-textMainColor mb-4">{paragraph}</p>
                <button className=" rounded-md z-20 relative cursor-pointer text-textSecondryColor border-2 border-textSecondryColor hover:bg-textSecondryColor hover:text-white px-8 py-3">Learn More</button>
            </div>
        </div >
    )
}

export default AboutUsTap