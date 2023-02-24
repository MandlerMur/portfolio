import Image from "next/image";
import Link from "next/link";
import { ProjectDetailProps } from "../sanitytypes/ProjectDetailProps";

const ProjectDetails : React.FC<ProjectDetailProps> = (props: ProjectDetailProps) => {
    return (
        <div className="bg-white">
            <h1 className="text-2xl font-bold ">{props.title}</h1>

            <div>
                {props.description}
            </div>
            <Image alt="daffadigg" src={props.image} width="500" height="500" />

            <div className="mt-5">
            <h1 className="text-2xl font-bold">Sjekk den ut!</h1>
                <iframe width="560" height="315" src={props.embedLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <Link href="/" className="font-bold underline hover:text-indigo-500 mt-6">
                Tilbake</Link>
        </div>)
}

export default ProjectDetails;