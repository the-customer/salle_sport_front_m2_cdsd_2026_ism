import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: "ri-dashboard-line" },
        { name: "Clients", path: "/clients", icon: "ri-group-line" },
        { name: "Utilisateurs", path: "/users", icon: "ri-user-settings-line" },
        { name: "Activités", path: "/activities", icon: "ri-barbell-line" },
        { name: "Billeteries", path: "/tickets", icon: "ri-ticket-2-line" },
        { name: "Rôles", path: "/roles", icon: "ri-shield-user-line" },
    ];
    const user = {
        name: "Aly Niang",
        role: "ADMIN",
    };

    return (
        <aside className="w-72 bg-black text-white flex flex-col shadow-xl">
            {/* LOGO */}
            <div className="h-20 flex items-center px-6 border-b border-gray-800">
                <Link to="/dashboard" className="text-2xl font-bold text-red-500">
                    GYM MANAGER
                </Link>
            </div>

            {/* MENU */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                ? "bg-red-600 text-white"
                                : "text-gray-300 hover:bg-gray-900 hover:text-white"
                            }`
                        }
                    >
                        <i className={`${item.icon} text-lg`}></i>
                        <span className="font-medium">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* FOOTER SIDEBAR */}
            <div className="p-4 border-t border-gray-800">
                <div className="rounded-lg bg-gray-900 p-4">
                    <p className="text-sm text-gray-400">Connecté en tant que</p>
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-red-400 mt-1">{user.role}</p>
                </div>
            </div>
        </aside>
    )
}
