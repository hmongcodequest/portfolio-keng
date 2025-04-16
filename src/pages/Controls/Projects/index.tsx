import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdEdit, MdDelete, MdLink } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    status: 'active' | 'archived';
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with React and TailwindCSS',
            image: '/project1.jpg',
            link: 'https://example.com',
            technologies: ['React', 'TailwindCSS', 'TypeScript'],
            status: 'active'
        },
        // Add more sample projects here
    ]);

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ໂຄງການທັງໝົດ</h1>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                    >
                        <MdAdd className="w-5 h-5" />
                        ເພີ່ມໂຄງການໃໝ່
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-600"
                                    >
                                        <MdEdit className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-red-600"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    <MdLink className="w-5 h-5" />
                                    ເບິ່ງໂຄງການ
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}