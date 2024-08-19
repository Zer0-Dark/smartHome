type Props = {
    ques: string,
    answer: string,
    open: boolean,
    handleOpen: (id: number) => void,
    id: number
}

function Faq({ ques, answer, open, handleOpen, id }: Props) {
    return (
        <div onClick={() => { handleOpen(id) }} className={`flex flex-col cursor-pointer  rounded-md p-6  desktop:p-8 shadow-md drop-shadow-md font-normal text-textMainColor  ${open ? "bg-white" : "bg-bgColor"}`}>
            <div className={`flex items-center ${open ? " mb-6" : ""} `}>
                <div className="mr-6 relative" >
                    {
                        !open ?
                            <>
                                <div className="w-1 h-6 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2  bg-black"></div>
                                <div className="w-6 h-1 absolute -top-0.5 left-0 -translate-x-1/2  bg-black"></div>
                            </>
                            :
                            <div className="w-6 h-1 absolute -top-0.5 left-0 -translate-x-1/2  bg-red-400"></div>
                    }

                </div>
                <h1>{ques}</h1>
            </div>
            {
                open &&
                <p className="font-light">{answer}</p>

            }
        </div>
    )
}

export default Faq