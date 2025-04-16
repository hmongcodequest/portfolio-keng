import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdEdit, MdDelete, MdVisibility, MdLink, MdDragIndicator } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

interface Page {
    id: number;
    title: string;
    slug: string;
    status: 'published' | 'draft';
    lastModified: string;
    author: string;
    views: number;
}

export default function Pages() {
    const [pages, setPages] = useState<Page[]>([
        {
            id: 1,
            title: 'ໜ້າຫຼັກ',
            slug: 'home',
            status: 'published',
            lastModified: '2024-03-15',
            author: 'Admin',
            views: 1234
        },
        {
            id: 2,
            title: 'ກ່ຽວກັບ',
            slug: 'about',
            status: 'published',
            lastModified: '2024-03-14',
            author: 'Admin',
            views: 856
        }
    ]);

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ໜ້າເວັບ</h1>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                    >
                        <MdAdd className="w-5 h-5" />
                        ສ້າງໜ້າໃໝ່
                    </motion.button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-600">
                        <div className="col-span-5">ຊື່ໜ້າ</div>
                        <div className="col-span-2">ສະຖານະ</div>
                        <div className="col-span-2">ແກ້ໄຂລ່າສຸດ</div>
                        <div className="col-span-2">ຍອດເຂົ້າເບິ່ງ</div>
                        <div className="col-span-1">ຈັດການ</div>
                    </div>

                    {pages.map((page) => (
                        <motion.div
                            key={page.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center hover:bg-gray-50 group"
                        >
                            <div className="col-span-5 flex items-center gap-3">
                                <MdDragIndicator className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 cursor-move" />
                                <div>
                                    <h3 className="font-medium text-gray-800">{page.title}</h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <MdLink className="w-4 h-4" />
                                        /{page.slug}
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <span className={`px-3 py-1 rounded-full text-sm
                                    ${page.status === 'published'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}
                                >
                                    {page.status === 'published' ? 'ເຜີຍແຜ່' : 'ຮ່າງ'}
                                </span>
                            </div>

                            <div className="col-span-2 text-gray-600">
                                {page.lastModified}
                            </div>

                            <div className="col-span-2 text-gray-600 flex items-center gap-1">
                                <MdVisibility className="w-4 h-4" />
                                {page.views.toLocaleString()}
                            </div>

                            <div className="col-span-1">
                                <div className="flex gap-2 justify-end">
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
                </div>
            </div>
        </Layout>
    );
}