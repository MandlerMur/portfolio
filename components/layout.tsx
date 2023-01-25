const Layout = (props: any) => {
    return (
        <div className="bg-cover bg-no-repeat bg-center bg-[url('/bg.jpg')]">
            <div className="font-sans">
                {props.children}
            </div>
        </div>)
}

export default Layout;