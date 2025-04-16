// import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdEdit, MdDelete, MdDragIndicator, MdDownload } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

// interface CVSection {
//     id: number;
//     type: 'education' | 'experience' | 'skills';
//     title: string;
//     institution?: string;
//     location?: string;
//     startDate: string;
//     endDate?: string;
//     description: string[];
// }

export default function CV() {
    const sections =[
        {
            id: 1,
            type: 'education',
            title: 'Bachelor of Computer Science',
            institution: 'National University of Laos',
            location: 'Vientiane, Laos',
            startDate: '2019',
            endDate: '2023',
            description: ['Major in Software Engineering', 'GPA: 3.8/4.0']
        },
        {
            id: 2,
            type: 'experience',
            title: 'Frontend Developer',
            institution: 'Tech Company',
            location: 'Vientiane, Laos',
            startDate: '2023',
            description: [
                'Developed responsive web applications',
                'Worked with React and TypeScript',
                'Collaborated with cross-functional teams'
            ]
        }
    ];

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ຊີວະປະຫວັດຫຍໍ້</h1>
                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                        >
                            <MdAdd className="w-5 h-5" />
                            ເພີ່ມພາກສ່ວນ
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg flex items-center gap-2"
                        >
                            <MdDownload className="w-5 h-5" />
                            ດາວໂຫຼດ PDF
                        </motion.button>
                    </div>
                </div>

                <div className="space-y-6">
                    {['education', 'experience', 'skills'].map((sectionType) => (
                        <motion.div
                            key={sectionType}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-6 capitalize">
                                {sectionType === 'education' ? 'ການສຶກສາ' :
                                 sectionType === 'experience' ? 'ປະສົບການ' : 'ທັກສະ'}
                            </h2>

                            {sections
                                .filter(section => section.type === sectionType)
                                .map((section) => (
                                    <motion.div
                                        key={section.id}
                                        className="border-b border-gray-100 last:border-0 pb-6 mb-6 last:mb-0"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-2">
                                                    <MdDragIndicator className="w-6 h-6 text-gray-400 cursor-move" />
                                                    <h3 className="text-lg font-medium text-gray-800">
                                                        {section.title}
                                                    </h3>
                                                </div>
                                                {section.institution && (
                                                    <p className="text-gray-600 ml-10">
                                                        {section.institution}, {section.location}
                                                    </p>
                                                )}
                                                <p className="text-gray-500 ml-10">
                                                    {section.startDate} - {section.endDate || 'ປະຈຸບັນ'}
                                                </p>
                                                <ul className="mt-3 space-y-2 ml-10">
                                                    {section.description.map((item, index) => (
                                                        <li key={index} className="text-gray-700">
                                                            • {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex gap-2">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 text-gray-400 hover:text-blue-600"
                                                >
                                                    <MdEdit className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 text-gray-400 hover:text-red-600"
                                                >
                                                    <MdDelete className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}