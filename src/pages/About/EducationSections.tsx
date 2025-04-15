import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

export default function EducationSections() {
    const education = [
        {
            degree: "ຊັ້ນສູງ ວິສະວະກໍາຊອບແວ ແລະ ການສຶກສາ",
            institution: "ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານ ໄອທີ",
            location: "ບ້ານ ໂນນສະຫວາງ, ເມືອງ ວຽງຄຳ, ແຂວງ ວຽງຈັນ",
            period: "2020 - 2022",
            description: "ການພັດທະນາແອັບພລິເຄຊັນ Frontend ແລະ Backend. ປະສິດທິພາບ ແລະ ສະຫນອງການແກ້ໄຂຊອບແວຄຸນນະພາບສູງ.",
            achievements: ["ກຽດນິຍົມອັນດັບໜຶ່ງ"],
            skills: ["ການພັດທະນາເວັບ", "ການອອກແບບຖານຂໍ້ມູນ", "ການວິເຄາະລະບົບ"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <FaGraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">ການເດີນທາງການສຶກສາ</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    ພື້ນຖານທາງວິຊາການຂອງຂ້ອຍແລະເສັ້ນທາງການຮຽນຮູ້ຢ່າງຕໍ່ເນື່ອງໃນເຕັກໂນໂລຢີແລະການພັດທະນາ
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-wrap items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {edu.degree}
                                    </h3>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full flex items-center"
                                    >
                                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                                        {edu.period}
                                    </motion.div>
                                </div>

                                <div className="flex items-center text-gray-600 mb-6">
                                    <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                                    <span>{edu.institution}, {edu.location}</span>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {edu.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <FaCertificate className="w-5 h-5 mr-2 text-blue-600" />
                                            ຜົນສຳເລັດ
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {edu.achievements.map((achievement, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center text-gray-600"
                                                >
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                    {achievement}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        ທັກສະຫຼັກໄດ້ຮັບ
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.skills.map((skill, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}