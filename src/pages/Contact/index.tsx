import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheck } from 'react-icons/fa';
import Header from '../../components/Web/Header';
import Footer from '../../components/Web/Footer';
import ScrollToTop from '../ScrollToTop';
export default function Contact() {
    useEffect(() => {
        document.title = "Contact | Keng";
      }, [])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "ອີເມວ",
            content: "hmongcodequest@gmail.com",
            link: "mailto:hmongcodequest@gmail.com"
        },
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "ໂທລະສັບ",
            content: "+856 2097049720",
            link: "tel:+8562097049720"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "ສະຖານທີ່",
            content: "ປະຈຸບັນ: ບ້ານ ໂນນສະຫວ່າງ, ເມືອງ ວຽງຄຳ, ແຂວງ ວຽງຈັນ",
            link: "https://maps.google.com"
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com/in/" },
        { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/hmongcodequest" },
        { icon: <FaTwitter className="w-6 h-6" />, url: "https://twitter.com/" }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-10 pt-20">
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 py-16 my-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-center shadow-xl"
            >
                <div className="max-w-7xl mx-auto px-4 space-y-8">
                    <motion.div
                        className="flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaEnvelope className="h-10 w-10 text-white" />
                        <h1 className="text-5xl font-bold text-white">ຕິດຕໍ່</h1>
                    </motion.div>

                    <motion.p
                        className="text-gray-100 text-lg max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        ຕິດຕໍ່ພວກເຮົາສໍາລັບການສອບຖາມທົ່ວໄປ, ການສະເໜີໂຄງການ, ຫຼືພຽງແຕ່ເພື່ອທັກທາຍ.
                        ພວກເຮົາຍິນດີທີ່ຈະໄດ້ຍິນຈາກທ່ານ ແລະຈະຕອບກັບໄວເທົ່າທີ່ຈະໄວໄດ້.
                        ທ່ານສາມາດໃຊ້ແບບຟອມດ້ານລຸ່ມ ຫຼືຕິດຕໍ່ພວກເຮົາໂດຍກົງຜ່ານຊ່ອງທາງທີ່ລະບຸໄວ້.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 pt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        ຕິດຕໍ່ໄດ້
                    </h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ໃຫ້ປຶກສາຫາລືໂຄງການຂອງເຈົ້າແລະເບິ່ງວ່າຂ້ອຍສາມາດຊ່ວຍໄດ້ແນວໃດ
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl 
                                             transform hover:-translate-y-1 transition-all duration-300"
                                    variants={itemVariants}
                                >
                                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 
                                                  text-white rounded-full shadow-inner">
                                        {info.icon}
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                                        <p className="text-gray-600 mt-1">{info.content}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="flex gap-6 justify-center md:justify-start">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600 
                                             rounded-xl shadow-md hover:shadow-xl hover:text-blue-600 
                                             transform hover:-translate-y-1 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-xl shadow-xl space-y-6 relative overflow-hidden"
                    >
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10"
                                >
                                    <div className="text-center">
                                        <FaCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <p className="text-xl font-semibold text-gray-900">Message Sent!</p>
                                        <p className="text-gray-600 mt-2">Thank you for reaching out.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                ຊື່
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='ໃສ່ຊື່ຂອງເຈົ້າ'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-0 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                ອີເມວ
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='ໃສ່ອີເມວຂອງເຈົ້າ'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 outline-0  focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                ຂໍ້ຄວາມ
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='ໃສ່ຂໍ້ຄວາມຂອງເຈົ້າ'
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 outline-0  focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                                     text-white rounded-xl shadow-md hover:shadow-xl disabled:opacity-70
                                     transition-all duration-300 font-medium flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                    <FaPaperPlane className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <>
                                    <FaPaperPlane className="w-5 h-5" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>

            <Footer />
            <ScrollToTop />
        </div>
    );
}