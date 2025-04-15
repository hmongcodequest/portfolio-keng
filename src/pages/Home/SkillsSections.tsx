import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaCode, FaChartLine } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

export default function SkillsSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skillCategories = [
        {
            title: "ການພັດທະນາ Frontend",
            skills: [
                { 
                    name: 'React', 
                    level: 90, 
                    icon: <FaReact className="w-8 h-8 text-blue-500" />,
                    description: "ການສ້າງການໂຕ້ຕອບຜູ້ໃຊ້ທີ່ຕອບສະຫນອງແລະໂຕ້ຕອບ"
                },
                { 
                    name: 'TypeScript', 
                    level: 85, 
                    icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
                    description: "ການພັດທະນາ JavaScript ແບບປອດໄພ"
                },
                { 
                    name: 'TailwindCSS', 
                    level: 70, 
                    icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
                    description: "ຮູບແບບທີ່ທັນສະໄຫມແລະຕອບສະຫນອງ"
                },
            ]
        },
        {
            title: "ການພັດທະນາ Backend",
            skills: [
                { 
                    name: 'Node.js', 
                    level: 80, 
                    icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
                    description: "ເວລາແລ່ນ JavaScript ຂ້າງເຊີບເວີ"
                },
                { 
                    name: 'MySQL', 
                    level: 85, 
                    icon: <SiMysql className="w-8 h-8 text-gray-900" />,
                    description: "ການຈັດການຖານຂໍ້ມູນສະຖານທີ່"
                },
                { 
                    name: 'MongoDB', 
                    level: 40, 
                    icon: <SiMongodb className="w-8 h-8 text-green-500" />,
                    description: "NoSQL database management"
                },
            ]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        <FaCode className="inline-block mr-2" />
                        ທັກສະດ້ານວິຊາການ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    ຄວາມຊ່ຽວຊານຂອງຂ້ອຍ
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    ມີຄວາມຊໍານິຊໍານານໃນເຕັກໂນໂລຢີແລະກອບເວັບທີ່ທັນສະໄຫມ
                    </p>
                </motion.div>

                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        className="mb-16 last:mb-0"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <FaChartLine className="mr-3 text-blue-600" />
                            {category.title}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                                             transition-all duration-300 border border-gray-100"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-900">
                                                {skill.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Proficiency</span>
                                            <span className="text-blue-600 font-medium">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}