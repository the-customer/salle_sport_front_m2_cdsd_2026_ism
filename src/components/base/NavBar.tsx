import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const user = {
        name: "Aly Niang",
        role: "ADMIN",
    };

    return (
        <header className="h-20 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
                <p className="text-sm text-gray-500">
                    Bienvenue dans votre espace de gestion
                </p>
            </div>

            {/* USER DROPDOWN */}
            <div className="relative">
                <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
                >
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                    </div>

                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                    </div>

                    <i className="ri-arrow-down-s-line text-xl text-gray-600"></i>
                </button>

                {openDropdown && (
                    <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                        <Link
                            to="/profile"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <i className="ri-user-line"></i>
                            Mon profil
                        </Link>

                        <Link
                            to="/settings"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <i className="ri-settings-3-line"></i>
                            Paramètres
                        </Link>

                        <button
                            className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                        >
                            <i className="ri-logout-box-r-line"></i>
                            Déconnexion
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
