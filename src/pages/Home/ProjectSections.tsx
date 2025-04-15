import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCode, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { useState } from 'react';

export default function ProjectSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory management, secure payments, and admin dashboard.",
            image: "/projects/ecommerce.jpg",
            category: "Full Stack",
            tags: ["React", "Node.js", "MongoDB", "Redux"],
            liveLink: "#",
            githubLink: "#",
            features: ["Responsive Design", "Payment Integration", "Admin Dashboard"]
        },
        {
            title: "Task Management App",
            description: "Real-time task management application with collaborative features. Includes team workspaces, task assignments, and progress tracking.",
            image: "/projects/taskmanager.jpg",
            category: "Frontend",
            tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
            liveLink: "#",
            githubLink: "#",
            features: ["Real-time Updates", "Team Collaboration", "Mobile Responsive"]
        },
        {
            title: "AI Chat Application",
            description: "Chat application powered by OpenAI's GPT model. Features include context awareness, code highlighting, and conversation history.",
            image: "/projects/aichat.jpg",
            category: "Full Stack",
            tags: ["React", "OpenAI", "Node.js", "WebSocket"],
            liveLink: "#",
            githubLink: "#",
            features: ["AI Integration", "Real-time Chat", "Code Snippets"]
        }
    ];
// Add this animation variant definition
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
    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="projects">
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.6,
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100  text-blue-600 
                                    rounded-full text-sm font-medium mb-4">
                        <FaCode className="inline-block mr-2" />
                        ໂຄງການຫຼັກຊັບ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
                    ວຽກທີ່ໂດດເດັ່ນ
                    </h2>
                    <p className="text-xl text-gray-600  max-w-3xl mx-auto mb-12">
                    ຄົ້ນຫາໂຄງການຫຼ້າສຸດຂອງຂ້ອຍທີ່ສະແດງວິທີແກ້ໄຂການພັດທະນາເວັບທີ່ທັນສະໄຫມ
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(category => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                                    ${selectedCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 '}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFilter className="inline-block mr-2" />
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            className="bg-white  rounded-xl overflow-hidden shadow-lg 
                                     hover:shadow-xl transition-all duration-300 border border-gray-100 
                                     "
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative group aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                                            opacity-0 group-hover:opacity-100 transition-all duration-300
                                            flex items-center justify-center gap-4">
                                    <motion.a
                                        href={project.liveLink}
                                        className="bg-white p-3 rounded-full hover:scale-110 
                                                 transition-transform"
                                        whileHover={{ scale: 1.1 }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View live demo of ${project.title}`}
                                    >
                                        <FaExternalLinkAlt className="w-5 h-5 text-blue-600" />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubLink}
                                        className="bg-white p-3 rounded-full hover:scale-110 
                                                 transition-transform"
                                        whileHover={{ scale: 1.1 }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View source code of ${project.title}`}
                                    >
                                        <FaGithub className="w-5 h-5 text-blue-600" />
                                    </motion.a>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900 ">
                                        {project.title}
                                    </h3>
                                    <span className="px-3 py-1 bg-blue-100  text-blue-600 
                                                    rounded-full text-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900 ">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 ">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100  text-gray-600 
                                                      rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
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