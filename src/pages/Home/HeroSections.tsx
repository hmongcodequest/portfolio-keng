import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaCode, FaArrowDown, FaReact,FaHtml5, FaCss3, FaJs, FaPhp} from 'react-icons/fa';
import { HiDownload, HiMail, HiCursorClick } from 'react-icons/hi';
import { SiMysql } from "react-icons/si";
import { Link } from 'react-router';
import Profile from '../../assets/images/profile.png'

export default function HeroSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const Icon = [
        {
           id: 1,
           icon: <FaReact className="w-10 h-10 text-blue-500" />,
           title: "React",
        },
        {
            id: 2,
            icon: <FaHtml5 className="w-10 h-10 text-orange-500" />,
            title: "HTML", 
        },
        {
            id: 3,
            icon: <FaCss3 className="w-10 h-10 text-blue-500" />,
            title: "CSS", 
        },
        {
            id: 4,
            icon: <FaJs className="w-10 h-10 text-yellow-400" />,
            title: "JavaScript", 
        },
        {
            id: 5,
            icon: <FaPhp className="w-10 h-10 text-purple-500" />,
            title: "PHP",
        },
        {
            id: 6,
            icon: <SiMysql className="w-10 h-10 text-green-500" />,
            title: "MySQL",
        },
    ]
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    const socialLinks = [
        { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/yourusername", label: "GitHub" },
        { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
        { icon: <HiMail className="w-6 h-6" />, url: "mailto:your.email@example.com", label: "Email" },
    ];

    return (
        <motion.section
            ref={ref}
            className="min-h-screen relative bg-gradient-to-b from-white to-gray-50"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: 0.4 } },
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <span className="inline-block px-4 py-2 bg-blue-500 dark:bg-blue-500 text-blue-100 dark:text-blue-100 rounded-full text-sm font-medium">
                            <HiCursorClick className="inline w-4 h-4 mr-2" />
                            ຍິນດີຕ້ອນຮັບສູ່ຫຼັກຊັບຂອງຂ້ອຍ
                        </span>
                        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] leading-tight font-bold">
                        ສະບາຍດີ, ຂ້ອຍຊື່{" "}
                            <motion.span
                                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                ເກັງເຮີ
                            </motion.span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                        ນັກພັດທະນາທີ່ມີຄວາມກະຕືລືລົ້ນສ້າງປະສົບການດິຈິຕອນທີ່ສວຍງາມດ້ວຍເຕັກໂນໂລຢີທີ່ທັນສະໄຫມ.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Link to="/projects">
                            <motion.button
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl 
                                         flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCode className="w-5 h-5" />
                                ເບິ່ງວຽກຂອງຂ້ອຍ
                            </motion.button>
                        </Link>
                        <motion.a
                            href="/resume.pdf"
                            className="px-8 py-4 border-2 border-gray-300 text-gray-700 
                                      rounded-xl flex items-center gap-2 hover:bg-gray-50 
                                      transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <HiDownload className="w-5 h-5" />
                            ດາວໂຫຼດ CV
                        </motion.a>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="pt-8">
                        <p className="text-gray-600 mb-4">ເຊື່ອມຕໍ່ກັບຂ້ອຍ</p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 rounded-xl text-gray-400 
                                              hover:text-blue-50 
                                             transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeInUp}
                    className="relative"
                >
                    {Icon.map((icon, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="absolute bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lx
                                     transform z-40 transition-transform duration-300 ease-in-out
                                     hover:scale-110 hover:shadow-xl"
                            style={{
                                bottom: `${Math.sin(index * (Math.PI / 3)) * 20 + 40}px`,
                                left: `${(index * (100 / Icon.length) * 0.8) + 10}%`,
                                transform: `translateX(-50%)`,
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                                {icon.icon}
                            </div>
                            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                                         text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 
                                         transition-opacity duration-200">
                                {icon.title}
                            </span>
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl 
                                  transform rotate-6 scale-95"></div>
                    <img 
                        src={Profile}
                        alt="Profile"
                        className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
                    />
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                variants={fadeInUp}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaArrowDown className="w-6 h-6 text-blue-400" />
            </motion.div>
        </motion.section>
    );
}
