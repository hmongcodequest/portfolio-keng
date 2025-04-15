import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser,FaBriefcase, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { BsArrowDownCircle } from 'react-icons/bs';
import Header from "../../components/Web/Header";
import AboutSections from "../Home/AboutSections";
import SkillsSections from "./SkillsSections";
import EducationSections from "./EducationSections";
// import WorkExperienceSections from './WorkExperienceSections';
import ContactSections from "../Home/ContactSections";
import Footer from "../../components/Web/Footer";
import ScrollToTop from "../ScrollToTop";

export default function About() {
    useEffect(() => {
        document.title = "About | Keng";
      }, [])
    const sections = [
        { id: 'about', icon: <FaUser />, title: 'ກ່ຽວກັບຂ້ອຍ' },
        { id: 'education', icon: <FaGraduationCap />, title: 'ການສຶກສາ' },
        { id: 'experience', icon: <FaBriefcase />, title: 'ປະສົບການ' },
        { id: 'skills', icon: <FaCode />, title: 'ທັກສະ' },
        { id: 'contact', icon: <FaEnvelope />, title: 'ຕິດຕໍ່' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <Header />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 py-16 my-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-center shadow-xl"
            >
                <div className="max-w-7xl mx-auto px-4 space-y-8">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                            <FaUser className="w-12 h-12 text-blue-500" />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">ກ່ຽວກັບຂ້ອຍ</h1>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        ຍິນດີຕ້ອນຮັບສູ່ເວັບໄຊທ໌ portfolio ຂອງຂ້ອຍ! ຂ້ອຍເປັນຜູ້ພັດທະນາເວັບທີ່ມີຄວາມກະຕືລືລົ້ນແລະອຸທິດຕົນ
                        ດ້ວຍຈຸດສຸມທີ່ເຂັ້ມແຂງໃນການສ້າງເວັບໄຊທ໌ທີ່ສວຍງາມແລະເປັນປະໂຫຍດ.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 pt-8"
                    >
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center cursor-pointer space-x-2 px-6 py-3 bg-white rounded-xl 
                                         text-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <span className="text-xl">{section.icon}</span>
                                <span className="font-medium">{section.title}</span>
                            </motion.button>
                        ))}
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="pt-8 flex justify-center"
                    >
                        <BsArrowDownCircle className="w-8 h-8 text-white opacity-80" />
                    </motion.div>
                </div>
            </motion.div>

            <div id="about">
                <AboutSections />
            </div>

            <div id="education">
                <EducationSections />
            </div>
            {/* <div id="experience">
                <WorkExperienceSections />
            </div> */}

            <div id="skills">
                <SkillsSections />
            </div>

            <div id="contact">
                <ContactSections />
            </div>

            <Footer />
            <ScrollToTop />
        </div>
    );
}