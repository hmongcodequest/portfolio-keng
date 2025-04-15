import React, { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLock, MdLogin, MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function Login() {
    useEffect(() => {
        document.title = 'ເຂົ້າສູ່ລະບົບ | KENG';
    }, []);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login submitted:', formData);
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
                <motion.div variants={itemVariants}>
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
                    ຍິນດີຕ້ອນຮັບກັບຄືນ
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                    ກະລຸນາເຂົ້າສູ່ລະບົບເພື່ອສືບຕໍ່
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 outline-0 rounded-xl border border-gray-200 
                                   focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                                   transition-all duration-300 ease-in-out"
                            required
                            placeholder="ໃສ່ອີເມວຂອງເຈົ້າ"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <MdLock className="w-5 h-5 text-blue-600" />
                            ລະຫັດຜ່ານ
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-0 rounded-xl border border-gray-200 
                                       focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                                       transition-all duration-300 ease-in-out"
                                required
                                placeholder="ໃສ່ລະຫັດຜ່ານຂອງທ່ານ"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 
                                         hover:text-gray-700 transition-colors duration-200"
                            >
                                {showPassword ? (
                                    <MdVisibilityOff className="w-5 h-5" />
                                ) : (
                                    <MdVisibility className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4">
                        <motion.button
                            type="submit"
                            className="w-full cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                                   text-white text-lg font-semibold rounded-xl
                                   shadow-md hover:shadow-xl hover:from-blue-700 hover:to-blue-800
                                   transition-all duration-300 flex items-center justify-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MdLogin className="w-6 h-6" />
                            Sign In
                        </motion.button>
                    </motion.div>
                </form>

                <motion.div 
                    variants={itemVariants}
                    className="mt-6 text-center text-sm text-gray-600"
                >
                    <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
                    ລືມລະຫັດຜ່ານຂອງທ່ານບໍ?
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}