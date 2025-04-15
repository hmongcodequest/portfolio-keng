import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaintBrush, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import { AiOutlineProject, AiOutlineUser } from 'react-icons/ai';
import Profile from '../../assets/images/profile1.png'
import { GiTrophyCup } from 'react-icons/gi';

export default function AboutSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skills = [
        { 
            icon: <FaLaptopCode className="w-8 h-8" />, 
            text: "ການພັດທະນາ Frontend",
            description: "ການສ້າງການໂຕ້ຕອບຜູ້ໃຊ້ທີ່ຕອບສະຫນອງແລະໂຕ້ຕອບໂດຍໃຊ້ React, TypeScript, ແລະກອບ CSS ທີ່ທັນສະໄຫມ."
        },
        { 
            icon: <FaPaintBrush className="w-8 h-8" />, 
            text: "ການອອກແບບ UI/UX",
            description: "ການ​ສ້າງ​ການ​ອອກ​ແບບ intuitive ແລະ​ເປັນ​ຕາ​ດຶງ​ດູດ​ໃຈ​ໂດຍ​ເນັ້ນ​ໃສ່​ປະ​ສົບ​ການ​ຂອງ​ຜູ້​ໃຊ້​ແລະ​ການ​ເຂົ້າ​ເຖິງ​."
        },
        { 
            icon: <FaDatabase className="w-8 h-8" />, 
            text: "ການພັດທະນາ Backend",
            description: "ພັດທະນາແອັບພລິເຄຊັນດ້ານເຊີບເວີທີ່ແຂງແຮງ ແລະ RESTful API ໂດຍໃຊ້ Node.js ແລະຖານຂໍ້ມູນ."
        }
    ];

    const stats = [
        { icon: <BiTimer className="w-10 h-10" />, value: "3+", label: "ປະສົບການປີ" },
        { icon: <AiOutlineProject className="w-10 h-10" />, value: "50+", label: "ໂຄງການສຳເລັດແລ້ວ" },
        { icon: <AiOutlineUser className="w-10 h-10" />, value: "20+", label: "ລູກຄ້າມີຄວາມສຸກ" },
        { icon: <GiTrophyCup className="w-10 h-10" />, value: "10+", label: "ລາງວັນຊະນະ" }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div 
                    className="text-center mb-20"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600  rounded-full text-sm font-medium mb-4">
                    ກ່ຽວກັບຂ້ອຍ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    ມີແຮງຈູງໃຈໃນການສ້າງວິທີແກ້ໄຂ
                        <span className="text-blue-600"> ດິຈິຕອນທີ່ສ້າງສັນ</span>
                    </h2>
                    <p className="text-xl text-gray-600  max-w-3xl mx-auto">
                    ດ້ວຍຄວາມຊໍານານໃນການພັດທະນາທັງດ້ານຫນ້າແລະດ້ານຫລັງ, ຂ້ອຍສ້າງວິທີແກ້ໄຂເວັບທີ່ສົມບູນແບບທີ່ໃຫ້ປະສົບການຜູ້ໃຊ້ພິເສດ.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                        }}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 mb-6 last:mb-0"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="p-3 bg-blue-100  rounded-lg text-blue-600">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {skill.text}
                                        </h3>
                                        <p className="text-gray-600">
                                            {skill.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-6 scale-95 opacity-20"></div>
                        <img
                            src={Profile}
                            alt="Profile"
                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div 
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 text-center shadow-lg"
                        >
                            <div className="text-blue-600 mb-4 flex justify-center">
                                {stat.icon}
                            </div>
                            <h4 className="text-4xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </h4>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}