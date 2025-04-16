// import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdEdit, MdDelete, MdDragIndicator } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

// interface Category {
//     id: number;
//     name: string;
//     description: string;
//     projectCount: number;
//     color: string;
// }

export default function Categories() {
    const categories =[
        {
            id: 1,
            name: 'Web Development',
            description: 'Projects related to web development',
            projectCount: 5,
            color: '#3B82F6'
        },
        {
            id: 2,
            name: 'Mobile Apps',
            description: 'Mobile application projects',
            projectCount: 3,
            color: '#10B981'
        }
    ];

    // API call to fetch categories
    // useEffect(() => {
    //     fetch(process.env.API_URL + '/api/v1/categories')
    //         .then(response => response.json())
    //         .then(data => setCategories(data))
    //         .catch(error => console.error('Error fetching categories:', error));
    // }, []);


    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ໝວດໝູ່</h1>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                    >
                        <MdAdd className="w-5 h-5" />
                        ເພີ່ມໝວດໝູ່ໃໝ່
                    </motion.button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0
                                     hover:bg-gray-50 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <MdDragIndicator className="w-6 h-6 text-gray-400 cursor-move opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: category.color + '20' }}
                                    >
                                        <div
                                            className="w-6 h-6 rounded"
                                            style={{ backgroundColor: category.color }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                                    {category.projectCount} ໂຄງການ
                                </span>
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                                    >
                                        <MdEdit className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}