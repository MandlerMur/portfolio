import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-red-500 text-2xl text-center font-bold">Mandler Productions</h1>
                <div className="flex flex-row justify-center overline">
                    <Link href={"/article/cv"}  className="text-2xl font-bold p-2 hover:text-red-300">CV</Link> 
                    <Link href={"/"}  className="text-2xl font-bold p-2 hover:text-red-300">Portfolio </Link>
                </div>
            </div>
        </>)
}

export default Header;