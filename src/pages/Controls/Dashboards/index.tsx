import { motion } from 'framer-motion';
import { MdPerson, MdWork, MdMessage, MdTrendingUp } from 'react-icons/md';
import Layout from '../../../components/Controls/Layout';

export default function Dashboard() {
    const stats = [
        { icon: <MdPerson className="w-6 h-6" />, label: 'ຜູ້ເຂົ້າຊົມ', value: '1,234', trend: '+12%' },
        { icon: <MdWork className="w-6 h-6" />, label: 'ໂຄງການ', value: '15', trend: '+3' },
        { icon: <MdMessage className="w-6 h-6" />, label: 'ຂໍ້ຄວາມ', value: '28', trend: '+5' },
        { icon: <MdTrendingUp className="w-6 h-6" />, label: 'ການມີສ່ວນຮ່ວມ', value: '85%', trend: '+7%' }
    ];

    const recentActivities = [
        { type: 'message', text: 'ມີຂໍ້ຄວາມໃໝ່ຈາກ John Doe', time: '5 ນາທີກ່ອນ' },
        { type: 'project', text: 'ອັບເດດໂຄງການ Portfolio', time: '2 ຊົ່ວໂມງກ່ອນ' },
        { type: 'visitor', text: 'ມີຜູ້ເຂົ້າຊົມໃໝ່ 50 ຄົນ', time: '1 ວັນກ່ອນ' }
    ];

    const DashboardContent = () => (
        <div className="p-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-6">ຍິນດີຕ້ອນຮັບກັບຄືນ, Admin!</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    {stat.icon}
                                </div>
                                <span className="text-sm font-medium text-green-600">{stat.trend}</span>
                            </div>
                            <h3 className="text-gray-600 text-sm mb-2">{stat.label}</h3>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">ກິດຈະກຳຫຼ້າສຸດ</h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    <p className="text-gray-700">{activity.text}</p>
                                </div>
                                <span className="text-sm text-gray-500">{activity.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2"
                    >
                        <MdWork className="w-5 h-5" />
                        ສ້າງໂຄງການໃໝ່
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2"
                    >
                        <MdMessage className="w-5 h-5" />
                        ເບິ່ງຂໍ້ຄວາມ
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2"
                    >
                        <MdTrendingUp className="w-5 h-5" />
                        ເບິ່ງລາຍງານ
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );

    return (
        <Layout>
            <DashboardContent />
        </Layout>
    );
}