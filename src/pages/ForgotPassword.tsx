import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router';

export default function ForgotPassword() {
    useEffect(() => {
        document.title = 'ລືມລະຫັດຜ່ານ | KENG';
    }, []);
    const [email, setEmail] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add password reset logic here
        console.log('Reset password requested for:', email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
            <motion.div
                className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl max-w-md w-full 
                         border border-gray-100"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Link 
                    to="/login"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
                >
                    <MdArrowBack className="w-5 h-5 mr-2" />
                    ກັບຄືນໄປຫາການເຂົ້າສູ່ລະບົບ
                </Link>

                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                        ຕັ້ງລະຫັດຜ່ານຄືນໃໝ່
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        ໃສ່ທີ່ຢູ່ອີເມວຂອງທ່ານ ແລະພວກເຮົາຈະສົ່ງຄຳແນະນຳໃນການຕັ້ງລະຫັດຜ່ານຄືນໃໝ່
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <MdEmail className="w-5 h-5 text-blue-600" />
                            ທີ່ຢູ່ອີເມວ
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 outline-0 rounded-xl border border-gray-200 
                                   focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                                   transition-all duration-300 ease-in-out"
                            required
                            placeholder="ໃສ່ອີເມວຂອງທ່ານ"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            type="submit"
                            className="w-full cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                                   text-white text-lg font-semibold rounded-xl
                                   shadow-md hover:shadow-xl hover:from-blue-700 hover:to-blue-800
                                   transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            ສົ່ງຄຳແນະນຳການຕັ້ງລະຫັດຜ່ານຄືນ
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
}