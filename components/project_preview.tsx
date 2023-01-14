import Image from "next/image";
import Link from "next/link"

export interface PreviewProps {
    title: string;
    description: string;
    image: string;
}

const ProjectPreview: React.FC<PreviewProps> = (props: PreviewProps) => {



    return (
        <div className="flex gap-4">
            <Image alt="daffadigg" src={props.image} width="200" height="200"></Image>
            <div className="my-auto">
                <Link href="/project" className="text-l font-bold underline hover:text-indigo-500">{props.title}</Link>
                <div>
                    {props.description} 
                </div>
            </div>
        </div>)
}

export default ProjectPreview;