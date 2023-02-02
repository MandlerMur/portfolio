import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

const Footer = () => {
    return <div className="border-t p-4 text-center">
        <div>Designed by Mandler Productions
        </div>
        <div className="flex gap-3 flex-row place-content-center text-orange-300">
            <Link href="https://www.instagram.com/mandlerproductions"><FontAwesomeIcon className="text-5xl" icon={faInstagram} /></Link>
            <Link href="https://www.linkedin.com/in/christophcarlson/"><FontAwesomeIcon className="text-5xl" icon={faLinkedin} /></Link>
        <Link href="https://github.com/MandlerMur"><FontAwesomeIcon className="text-5xl" icon={faGithub} /></Link>
        <Link href="https://www.facebook.com/profile.php?id=100043594346343"><FontAwesomeIcon className="text-5xl" icon={faFacebook} /></Link>
    </div>
    </div >
}

export default Footer;