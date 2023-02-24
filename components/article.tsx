import { ArticleProps } from "@/sanitytypes/ArticleProps";
import Link from "next/link";
import {PortableText, PortableTextComponents} from '@portabletext/react'

const Article : React.FC<ArticleProps> = (props: ArticleProps) => {

    const ptComponents: PortableTextComponents = {
        list:  ({children}) => <ul className="list-disc list-inside">{children}</ul>,
        listItem: ({children}) => <li>{children}</li>,
        block: {
            h2: ({children}) => <h2 className="text-4xl mt-4">{children}</h2>,
            h4: ({children}) => <h4 className="text-2xl font-bold mt-4">{children}</h4>
        }
    }

    return (
        <div className="bg-white m-4 p-4">
            <div className="mb-8">
                <PortableText value={props.body} components={ptComponents} />
            </div>
          
            <Link href="/" className="font-bold underline hover:text-indigo-500 pt-20">
                Tilbake</Link>
        </div>)
}

export default Article;