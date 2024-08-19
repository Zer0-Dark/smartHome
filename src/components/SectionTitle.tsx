

function SectionTitle({ title, paragraph }: { title: string, paragraph?: string }) {
    return (
        <div className="w-full mx-auto py-8 desktop:py-16 px-4">
            <h1 className=" text-textMainColor text-center text-5xl  desktop:text-6xl font-bold">{title}</h1>
            {
                paragraph &&
                <p className="mx-auto text-center desktop:max-w-[60%] text-textMainColor">{paragraph}</p>
            }
        </div>
    )
}

export default SectionTitle