import Image from "next/image";
import Link from "next/link"

export interface PreviewProps {
    title: string;
    description: string;
    image: string;
    _id: string;
}

const ProjectPreview: React.FC<PreviewProps> = (props: PreviewProps) => {

    return (
        <div className="bg-red-400 shadow-lg m-3 p-3 rounded-lg text-slate-50">

            <div className="w-full">
                <Image alt="daffadigg" className="p-2" src={props.image} width="400" height="400"></Image>
                
                <Link href={`/post/${props._id}`}  className="text-l font-bold underline p-2 hover:text-slate-200">{props.title}</Link>
                <div className="p-2">
                    {props.description}
                </div>
            </div>
        </div>)
}

export default ProjectPreview;