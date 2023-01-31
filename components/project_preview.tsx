import Image from "next/image";
import Link from "next/link"

export interface PreviewProps {
    title: string;
    description: string;
    image: string;
    _id: string;
}

const ProjectPreview: React.FC<PreviewProps> = (props: PreviewProps) => {


    {console.log(props);}
    return (
        <div className="bg-orange-100/90 rounded text-slate-800">

            <div className="w-full p-4 m-4">
                <Image alt="daffadigg" className="p-2" src={props.image} width="400" height="400"></Image>
                
                <Link href={`/project?id=${props._id}`}  className="text-l font-bold underline p-2 hover:text-indigo-500">{props.title}</Link>
                <div className="p-2">
                    {props.description}
                </div>
            </div>
        </div>)
}

export default ProjectPreview;