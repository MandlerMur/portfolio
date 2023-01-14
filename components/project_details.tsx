import Image from "next/image";
import Link from "next/link";

const picture = "/daffadigg.jpg";
const ProjectDetails = () => {


    const title: string = "Speed date med Roger Nilsen"
    const description: string = "Roger Nilsen dro på blind date med fire ukjente kvinner."

    return (
        <div >
            <h1 className="text-2xl font-bold ">{title}</h1>

            <div>
                {description}
            </div>
            <Image alt="daffadigg" src={picture} width="500" height="500" />



            <div className="mt-5">
            <h1 className="text-2xl font-bold ">Sjekk den ut!</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rgjtIFRqUM0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <Link href="/" className="font-bold underline hover:text-indigo-500 mt-6">
                Tilbake</Link>
        </div>)
}

export default ProjectDetails;