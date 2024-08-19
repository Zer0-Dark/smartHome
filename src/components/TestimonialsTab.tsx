type Props = {
    paragraph: string,
    photo: string,
    name: string,
    job: string
}

function TestimonialsTab({ paragraph, photo, name, job }: Props) {
    return (
        <div className=" flex flex-col justify-between desktop:w-[49%] w-[90%] bg-bgColor hover:bg-white  shadow-md drop-shadow-md p-4 desktop:p-12">
            <p className="text-sm italic leading-6 desktop:leading-8 text-textSecondryColor  ">{paragraph}</p>
            <div className="flex mt-2  desktop:mt-4">
                <img src={photo} alt="pfp" className="mr-6"></img>
                <div>
                    <h1 className="font-bold text-textSecondryColor" >{name}</h1>
                    <h1 className=" opacity-60">{job}</h1>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsTab