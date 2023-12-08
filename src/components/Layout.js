import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar bg-base-100" data-theme="dark">
                <ul className="flex-1">
                    <li className="btn btn-ghost normal-case text-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="btn btn-ghost normal-case text-xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="btn btn-ghost normal-case text-xl">
                        <Link to="/developers">Developers</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;