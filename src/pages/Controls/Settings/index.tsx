import  { useState } from 'react';
import { motion } from 'framer-motion';
import { MdPerson, MdSecurity, MdNotifications, MdLanguage, MdSave } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');
    const [settings, setSettings] = useState({
        profile: {
            name: 'Admin User',
            email: 'admin@example.com',
            avatar: '/avatar-placeholder.png'
        },
        notifications: {
            email: true,
            push: false,
            updates: true
        },
        language: 'lo',
        theme: 'light'
    });

    const tabs = [
        { id: 'profile', label: 'ໂປຣໄຟລ', icon: <MdPerson /> },
        { id: 'security', label: 'ຄວາມປອດໄພ', icon: <MdSecurity /> },
        { id: 'notifications', label: 'ການແຈ້ງເຕືອນ', icon: <MdNotifications /> },
        { id: 'language', label: 'ພາສາ', icon: <MdLanguage /> }
    ];

    return (
        <Layout>
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">ຕັ້ງຄ່າ</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    whileHover={{ x: 4 }}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left mb-2
                                             ${activeTab === tab.id
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                        >
                            {activeTab === 'profile' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">ຕັ້ງຄ່າໂປຣໄຟລ</h2>
                                    
                                    <div className="flex items-center gap-4 mb-8">
                                        <img
                                            src={settings.profile.avatar}
                                            alt="Profile"
                                            className="w-20 h-20 rounded-full"
                                        />
                                        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                                            ປ່ຽນຮູບ
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ຊື່
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.profile.name}
                                                onChange={(e) => setSettings({
                                                    ...settings,
                                                    profile: { ...settings.profile, name: e.target.value }
                                                })}
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ອີເມວ
                                            </label>
                                            <input
                                                type="email"
                                                value={settings.profile.email}
                                                onChange={(e) => setSettings({
                                                    ...settings,
                                                    profile: { ...settings.profile, email: e.target.value }
                                                })}
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2"
                            >
                                <MdSave className="w-5 h-5" />
                                ບັນທຶກການປ່ຽນແປງ
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}