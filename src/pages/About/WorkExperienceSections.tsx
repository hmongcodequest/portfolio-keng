import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTasks, FaAward } from 'react-icons/fa';

export default function WorkExperienceSections() {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Company Name",
            location: "City, Country",
            period: "2021 - Present",
            description: "Led the frontend development team in creating responsive and accessible web applications.",
            responsibilities: [
                "Architected and implemented scalable frontend solutions",
                "Mentored junior developers and conducted code reviews",
                "Optimized application performance and user experience"
            ],
            achievements: [
                "Reduced load time by 40%",
                "Implemented CI/CD pipeline",
                "Led successful migration to Next.js"
            ],
            technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
        },
        {
            title: "Full Stack Developer",
            company: "Another Company",
            location: "City, Country",
            period: "2019 - 2021",
            description: "Developed and maintained full-stack web applications using modern technologies.",
            responsibilities: [
                "Built RESTful APIs and microservices",
                "Implemented responsive UI designs",
                "Managed database architecture and optimization"
            ],
            achievements: [
                "Increased user engagement by 60%",
                "Automated deployment process",
                "Reduced bug reports by 45%"
            ],
            technologies: ["Node.js", "React", "MongoDB", "Docker"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 bg-white">
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
                    <FaBriefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        My professional journey and contributions in the tech industry
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl text-blue-600 mb-2">{exp.company}</p>
                                    <div className="flex items-center text-gray-600 space-x-4">
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="w-4 h-4 mr-2" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center">
                                            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                                >
                                    {exp.period}
                                </motion.div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <FaTasks className="w-5 h-5 mr-2 text-blue-600" />
                                        Key Responsibilities
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <motion.li
                                                key={idx}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center text-gray-600"
                                            >
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                {resp}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <FaAward className="w-5 h-5 mr-2 text-blue-600" />
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, idx) => (
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
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}