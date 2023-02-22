import { ArticleProps } from "@/sanitytypes/ArticleProps";
import client from "@/sanitytypes/Connection";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {

    const [articles, setArticles] = useState<ArticleProps[]>();
    useEffect(() => {
        client.fetch("*[_type == 'article']").
        then(data => {
            setArticles(data);
        }).
        catch((error) => {
            console.log(error);
        })
    }, []);
    // console.log(articles)
    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-red-500 text-2xl text-center font-bold">Mandler Productions</h1>
                <div className="flex flex-row justify-center overline">
                    <Link href={"/"}  className="text-2xl font-bold p-2 hover:text-red-300">Video</Link>

                    {articles?.map(a => 
                    <Link key={a.slug} href={`/article/${a.slug}`}  className="text-2xl font-bold p-2 hover:text-red-300">{a.title}</Link> 
                    )}
                </div>
            </div>
        </>)
}

export default Header;