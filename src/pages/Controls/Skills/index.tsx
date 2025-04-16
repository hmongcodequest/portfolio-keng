// import  { useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdEdit, MdDelete, MdStar } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

// interface Skill {
//     id: number;
//     name: string;
//     category: string;
//     proficiency: number;
//     yearsOfExperience: number;
//     isFeatured: boolean;
// }

export default function Skills() {
    const skills =[
        {
            id: 1,
            name: 'React',
            category: 'Frontend',
            proficiency: 90,
            yearsOfExperience: 3,
            isFeatured: true
        },
        {
            id: 2,
            name: 'Node.js',
            category: 'Backend',
            proficiency: 85,
            yearsOfExperience: 2,
            isFeatured: true
        }
    ];


    const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ທັກສະ</h1>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                    >
                        <MdAdd className="w-5 h-5" />
                        ເພີ່ມທັກສະໃໝ່
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {categories.map((category) => (
                        <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">{category}</h2>
                            <div className="space-y-4">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill) => (
                                        <motion.div
                                            key={skill.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="relative"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-medium text-gray-800">
                                                        {skill.name}
                                                    </h3>
                                                    {skill.isFeatured && (
                                                        <MdStar className="w-5 h-5 text-yellow-400" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-sm text-gray-600">
                                                        {skill.yearsOfExperience} ປີ
                                                    </span>
                                                    <div className="flex gap-2">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="p-1 text-gray-400 hover:text-blue-600"
                                                        >
                                                            <MdEdit className="w-5 h-5" />
                                                        </motion.button>
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="p-1 text-gray-400 hover:text-red-600"
                                                        >
                                                            <MdDelete className="w-5 h-5" />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.proficiency}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-blue-600 rounded-full"
                                                />
                                            </div>
                                            <span className="absolute right-0 -top-6 text-sm text-gray-600">
                                                {skill.proficiency}%
                                            </span>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}