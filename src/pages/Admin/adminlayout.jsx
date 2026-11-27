import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <div>
            <h1>Admin Panel</h1>

            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/userDetails">User Details</Link>
                <Link to="/admin/settings">Settings</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default Adminlayout;