const Layout = (props: any) => {
    return (
        <div className="bg-cover bg-no-repeat bg-center bg-lighthouse bg-opacity-50">
            <div className="font-sans">
                {props.children}
            </div>
        </div>)
}

export default Layout;