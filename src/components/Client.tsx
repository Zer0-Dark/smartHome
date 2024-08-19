
type Props = {
    clientLogo: string
}
function Client({ clientLogo }: Props) {
    return (
        <div className="desktop:w-56 w-32 h-28 desktop:h-32 bg-white shadow-md drop-shadow-md flex justify-center items-center">
            <img className="max-h-[90%] max-w-[90%]" src={clientLogo} alt="logo"></img>
        </div>
    )
}

export default Client