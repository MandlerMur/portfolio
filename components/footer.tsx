import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return <div className="border-t p-4 text-center">
        <div>Designed by Mandler Productions
        </div>
        <div className="flex gap-3 flex-row place-content-center text-orange-300">
            <FontAwesomeIcon className="text-5xl" icon={faInstagram} />
            <FontAwesomeIcon className="text-5xl" icon={faLinkedin} />
            <FontAwesomeIcon className="text-5xl" icon={faGithub} />
            <FontAwesomeIcon className="text-5xl" icon={faFacebook} />
        </div>
    </div>
}

export default Footer;