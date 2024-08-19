
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import linkedIn from "../assets/linkedIn.svg"
function HeroIcons(props: { style: string }) {
    return (
        <div className={props.style}>

            <a href="#" className="block"><img src={facebook} alt="facebook" /></a>
            <a href="#" className="block"><img src={insta} alt="insta" /></a>
            <a href="#" className="block"> <img src={twitter} alt="twitter" /></a>
            <a href="#" className="block"> <img src={linkedIn} alt="linkedIn" /></a>


        </div>
    )
}

export default HeroIcons