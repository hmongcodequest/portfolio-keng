import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MdEmail, MdPhone, MdPerson, MdMessage, MdSend } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactSections() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <MdEmail className="w-6 h-6" />,
            text: "hmongcodequest@gmail.com",
            link: "mailto:hmongcodequest@gmail.com"
        },
        {
            icon: <MdPhone className="w-6 h-6" />,
            text: "+856 2097049720",
            link: "tel:+8562097049720"
        }
    ];

    const socialLinks = [
        { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/yourusername" },
        { icon: <FaLinkedin className="w-5 h-5" />, url: "https://linkedin.com/in/yourprofile" },
        { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/yourhandle" },
    ];

    return (
        <section className="py-20 bg-white" id="contact">
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="text-center mb-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ຕິດຕໍ່ໄດ້
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        className="space-y-6"
                        initial={{ x: -50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">
                        ມາເຊື່ອມຕໍ່ກັນ
                        </h3>
                        <p className="text-gray-600">
                        ຮູ້ສຶກວ່າບໍ່ເສຍຄ່າເພື່ອເຂົ້າຫາການຮ່ວມມືຫຼືພຽງແຕ່ສະບາຍດີທີ່ເປັນມິດ
                        </p>
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all"
                                >
                                    <span className="text-blue-600">{info.icon}</span>
                                    {info.text}
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ x: 50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <MdPerson className="w-5 h-5 text-blue-600" />
                                ຊື່
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="ກະລຸນາປ້ອນຊື່ຂອງທ່ານ"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-0 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <MdEmail className="w-5 h-5 text-blue-600" />
                                ອີເມວ
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ກະລຸນາປ້ອນອີເມວຂອງທ່ານ"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-0 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                <MdMessage className="w-5 h-5 text-blue-600" />
                                ຂໍ້ຄວາມ
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="ກະລຸນາປ້ອນຂໍ້ຄວາມຂອງທ່ານ"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 outline-0 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg
                                     hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MdSend className="w-5 h-5" />
                            ສົ່ງຂໍ້ຄວາມ
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}