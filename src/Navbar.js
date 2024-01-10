const Navbar = () => {
    return (
        <div>
            <main className="nav-white">
                <p className="t-violet fw-500">Try Yumma CSS</p>
                <ul className="d-f">
                    <li className="ml-1 t-violet" aria-current="page"><a href="/">Home</a></li>
                    <li className="ml-1 t-black h:t-violet"><a target="_blank" rel="noreferrer" href="https://yummacss.vercel.app/">Docs</a></li>
                    <li className="ml-1 t-black h:t-violet"><a target="_blank" rel="noreferrer" href="https://github.com/yumma-lib/yumma-css-editor#readme">About</a></li>
                </ul>
            </main>
        </div>
    );
}

export default Navbar;