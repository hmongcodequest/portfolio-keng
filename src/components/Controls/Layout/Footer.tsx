import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

interface FooterProps {
    isSidebarOpen: boolean; 
}

export default function Footer({ isSidebarOpen }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-gray-100 p-4 transition-all duration-300 ease-out ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <span className="text-sm text-gray-600">
                        © {currentYear} ແຜງຄວບຄຸມ. ເຮັດດ້ວຍ
                    </span>
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaHeart className="w-4 h-4 text-red-500" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-6"
                >
                    <button 
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        ກັບຄືນສູ່ເທິງ
                    </button>
                    <a 
                        href="/admin/help" 
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        ຊ່ວຍເຫຼືອ
                    </a>
                    <a 
                        href="/admin/privacy" 
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}