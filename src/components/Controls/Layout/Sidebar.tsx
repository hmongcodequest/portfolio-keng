import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { MdDashboard,  MdWork, MdMessage, MdSettings, MdCategory } from 'react-icons/md';
import { GiSkills } from "react-icons/gi";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaPager } from "react-icons/fa6";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const location = useLocation();

    const menuItems = [
        { icon: <MdDashboard className="w-6 h-6" />, label: 'ແຜງຄວບຄຸມ', path: '/controls/dashboard' },
        { icon: <MdCategory className="w-6 h-6" />, label: 'ໝວດໝູ່', path: '/controls/categories' },
        { icon: <GiSkills className="w-6 h-6" />, label: 'ທັກສະ', path: '/controls/skills' },
        { icon: <PiReadCvLogoFill className="w-6 h-6" />, label: 'CV', path: '/controls/cv' },
        { icon: <MdWork className="w-6 h-6" />, label: 'ໂຄງການ', path: '/controls/projects' },
        { icon: <MdMessage className="w-6 h-6" />, label: 'ຂໍ້ຄວາມ', path: '/controls/messages' },
        { icon: <FaPager className="w-6 h-6" />, label: 'ໜ້າທີ່', path: '/controls/pages' },
        { icon: <MdSettings className="w-6 h-6" />, label: 'ຕັ້ງຄ່າ', path: '/controls/settings' },
    ];

    const sidebarVariants = {
        open: {
            x: 0,
            width: "240px",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: -240,
            width: "0px",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 
                     overflow-hidden z-40"
        >
            <div className="flex flex-col p-4 h-full">
                <nav className="flex-grow">
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                            ${location.pathname === item.path
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-blue-50 rounded-lg"
                >
                    <h3 className="text-sm font-medium text-blue-800 mb-2">ຕ້ອງການຄວາມຊ່ວຍເຫຼືອ?</h3>
                    <p className="text-sm text-blue-600">
                        ກົດທີ່ນີ້ເພື່ອເບິ່ງຄູ່ມືການນຳໃຊ້
                    </p>
                </motion.div>
            </div>
        </motion.aside>
    );
}