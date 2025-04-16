import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdInbox, MdArchive, MdDelete, MdStar, MdStarBorder, MdReply } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

interface Message {
    id: number;
    sender: string;
    email: string;
    subject: string;
    content: string;
    date: string;
    isRead: boolean;
    isStarred: boolean;
}

export default function Messages() {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            sender: "John Doe",
            email: "john@example.com",
            subject: "Project Collaboration",
            content: "Hi, I'm interested in collaborating on a project...",
            date: "2024-03-15",
            isRead: false,
            isStarred: true
        },
        {
            id: 2,
            sender: "Jane Smith",
            email: "jane@example.com",
            subject: "Website Feedback",
            content: "Your portfolio looks great! I especially liked...",
            date: "2024-03-14",
            isRead: true,
            isStarred: false
        }
    ]);

    const toggleStar = (messageId: number) => {
        setMessages(messages.map(msg => 
            msg.id === messageId ? {...msg, isStarred: !msg.isStarred} : msg
        ));
    };

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">ຂໍ້ຄວາມ</h1>
                    <span className="text-gray-600">{messages.length} ຂໍ້ຄວາມ</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Message List */}
                    <div className="md:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => setSelectedMessage(message)}
                                className={`p-4 border-b border-gray-100 cursor-pointer
                                         ${!message.isRead ? 'bg-blue-50' : 'bg-white'}
                                         ${selectedMessage?.id === message.id ? 'border-l-4 border-l-blue-600' : ''}
                                         hover:bg-gray-50 transition-colors`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className={`font-medium ${!message.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {message.sender}
                                    </h3>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleStar(message.id);
                                        }}
                                        className="text-gray-400 hover:text-yellow-400"
                                    >
                                        {message.isStarred ? <MdStar className="w-5 h-5 text-yellow-400" /> : <MdStarBorder className="w-5 h-5" />}
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{message.subject}</p>
                                <span className="text-xs text-gray-500">{message.date}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Message Content */}
                    <div className="md:col-span-2">
                        {selectedMessage ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                            {selectedMessage.subject}
                                        </h2>
                                        <p className="text-gray-600">
                                            ຈາກ: {selectedMessage.sender} &lt;{selectedMessage.email}&gt;
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 text-gray-400 hover:text-blue-600"
                                        >
                                            <MdReply className="w-5 h-5" />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 text-gray-400 hover:text-gray-600"
                                        >
                                            <MdArchive className="w-5 h-5" />
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
                                <div className="prose max-w-none">
                                    <p className="text-gray-700">{selectedMessage.content}</p>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                                <div className="text-center">
                                    <MdInbox className="w-16 h-16 mx-auto mb-4" />
                                    <p>ເລືອກຂໍ້ຄວາມເພື່ອອ່ານ</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}