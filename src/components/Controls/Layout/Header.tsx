import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MdMenu, MdClose, MdDashboard, MdPerson, MdSettings, MdLogout } from 'react-icons/md';

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

export default function Header({ toggleSidebar, isSidebarOpen }: HeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const menuItems = [
        { icon: <MdDashboard />, label: 'ແຜງຄວບຄຸມ', link: '/admin/dashboard' },
        { icon: <MdPerson />, label: 'ໂປຣໄຟລ', link: '/admin/profile' },
        { icon: <MdSettings />, label: 'ຕັ້ງຄ່າ', link: '/admin/settings' },
    ];

    return (
        <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
            <div className="px-4 h-16 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleSidebar}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {isSidebarOpen ? (
                            <MdClose className="w-6 h-6 text-gray-600" />
                        ) : (
                            <MdMenu className="w-6 h-6 text-gray-600" />
                        )}
                    </motion.button>
                    <h1 className="text-xl font-semibold text-gray-800">ແຜງຄວບຄຸມ</h1>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <img
                                src="/avatar-placeholder.png"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-medium text-gray-700">Admin</span>
                        </motion.button>

                        {/* Profile Dropdown */}
                        {isProfileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200"
                            >
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        // Add logout logic here
                                        console.log('Logging out...');
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                                >
                                    <MdLogout />
                                    ອອກຈາກລະບົບ
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}