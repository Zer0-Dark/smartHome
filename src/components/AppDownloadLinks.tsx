import appleButton from "../assets/Apple download button.png"
import googleButton from "../assets/Google download button.png"
function AppDownloadLinks() {
    return (
        <div className="flex w-fit gap-4 drop-shadow-lg">
            <a href="#">
                <img className="h-12 desktop:h-20" src={appleButton}></img>
            </a>
            <a href="#">
                <img className="h-12 desktop:h-20" src={googleButton}></img>
            </a>

        </div>
    )
}

export default AppDownloadLinks