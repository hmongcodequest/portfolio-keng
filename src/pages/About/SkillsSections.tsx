import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFigma,  FaReact, FaCss3, FaJs, FaNodeJs} from 'react-icons/fa';
import { SiAdobexd, SiTypescript, SiTailwindcss, SiHtml5, SiMysql, SiPhp, SiPython, SiMongodb } from 'react-icons/si';
import { MdDesignServices, MdDevices, MdStorage } from 'react-icons/md';

export default function SkillsSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = [
        {
            title: "ເຄື່ອງມືການອອກແບບ",
            icon: <MdDesignServices className="w-6 h-6" />,
            skills: [
                { name: "Figma", icon: <FaFigma />, level: 40 },
                { name: "Adobe XD", icon: <SiAdobexd />, level: 20 },
                // { name: "Sketch", icon: <FaSketch />, level: 80 }
            ]
        },
        {
            title: "ການພັດທະນາ Frontend",
            icon: <MdDevices className="w-6 h-6" />,
            skills: [
                { name: "HTML", icon: <SiHtml5 />, level: 90 },
                { name: "CSS", icon: <FaCss3 />, level: 85 },
                { name: "JavaScript", icon: <FaJs />, level: 70 },
                { name: "React", icon: <FaReact />, level: 75 },
                { name: "TypeScript", icon: <SiTypescript />, level: 55 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
                // Other skills...
            ]
        },
        {
            title: "ການພັດທະນາ Backend",
            icon: <MdStorage className="w-6 h-6" />,
            skills: [
                { name: "SQL", icon: <SiMysql />, level: 60 },
                { name: "Node.js", icon: <FaNodeJs />, level: 50 },
                { name: "PHP", icon: <SiPhp />, level: 80 },
                { name: "Python", icon: <SiPython />, level: 40 },
                { name: "MongoDB", icon: <SiMongodb />, level: 30 },
                // Other skills...
            ]
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { transition: { staggerChildren: 0.3 } }
                }}
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ທັກສະ & ຄວາມຊໍານານ
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map(category => (
                        <motion.div
                            key={category.title}
                            variants={fadeInUp}
                            className="bg-white rounded-xl p-8 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-blue-600">{category.icon}</span>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: skillIndex * 0.1 }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-600 text-xl">
                                                    {skill.icon}
                                                </span>
                                                <span className="font-medium text-gray-700">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-600 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}