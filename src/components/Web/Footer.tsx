import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';
import Logo_Keng from '../../assets/Logo_Keng.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourprofile',
            icon: <FaLinkedinIn className="w-5 h-5" />
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/yourhandle',
            icon: <FaTwitter className="w-5 h-5" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const menu_item = [
        {
            name: 'ໜ້າຫຼັກ',
            url: '/',
        },
        {
            name: 'ກ່ຽວກັບ',
            url: '/about',
        },
        {
            name: 'ໂຄງການ',
            url: '/projects',
        },
        {
            name: 'ຕິດຕໍ່',
            url: '/contact',
        }
    ]

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <Link to="/" className="inline-block">
                            <img src={Logo_Keng} className="w-48 h-16" alt="" />
                        </Link>
                        <p className="text-gray-600 leading-relaxed font-light">
                        ການສ້າງປະສົບການດິຈິຕອນດ້ວຍ passion ແລະຈຸດປະສົງ
                        </p>
                    </motion.div>

                    <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        ລິ້ງດ່ວນ
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {menu_item.map((item) => (
                                <Link 
                                    key={item.name}
                                    to={`${item.url}`} 
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 
                                             transform hover:translate-x-2 font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        ເຊື່ອມຕໍ່
                        </h3>
                        <div className="flex space-x-5">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-sm text-gray-600 
                                             hover:text-blue-600 hover:shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    variants={itemVariants}
                    className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-center space-x-2"
                >
                    <p className="text-center text-gray-500 text-sm font-medium">
                        © {currentYear} ເກັງເຮີ. ເຮັດດ້ວຍ
                    </p>
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
            </motion.div>
        </footer>
    );
}