const Layout = (props: any) => {
    return (
        <div className="bg-cover text-slate-700 font-serif bg-[url('/bg.jpg')]">
            <div className="">
                {props.children}
            </div>
        </div>)
}

export default Layout;