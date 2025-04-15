import  { useEffect } from 'react';
import Header from "../../components/Web/Header";
import Projects from "./Projects";
import ContactSections from "../Home/ContactSections";
import Footer from "../../components/Web/Footer";
import ScrollToTop from "../ScrollToTop";
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import { BsFolderFill } from 'react-icons/bs';

const ProjectsIndex = () => {
  useEffect(() => {
    document.title = "Projects | Keng";
  }, [])
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
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <BsFolderFill className="h-10 w-10 text-white" />
            <h1 className="text-5xl font-bold text-white">ໂຄງການ</h1>
          </motion.div>

          <motion.p 
            className="text-gray-100 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ຄົ້ນ​ຫາ​ຫຼັກ​ຊັບ​ຂອງ​ຂ້າ​ພະ​ເຈົ້າ​ຂອງ​ວິ​ທີ​ແກ້​ໄຂ​ເວັບ​ໄຊ​ຕ​໌​ໃຫມ່​, ມີ​ການ​ອອກ​ແບບ​ທີ່​ຕອບ​ສະ​ຫນອງ​,
 ການເຊື່ອມໂຍງຂໍ້ມູນໃນເວລາຈິງ, ແລະການໂຕ້ຕອບຜູ້ໃຊ້ເປັນສູນກາງ. ແຕ່ລະໂຄງການສະແດງໃຫ້ເຫັນ
 ຄໍາຫມັ້ນສັນຍາຂອງຂ້ອຍໃນການສ້າງປະສົບການດິຈິຕອນທີ່ສາມາດເຂົ້າເຖິງໄດ້, ມີປະສິດທິພາບ, ແລະມີສ່ວນຮ່ວມ.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-medium 
                       hover:bg-opacity-90 transition-all duration-300 flex items-center 
                       shadow-md hover:shadow-lg"
            >
              <FaProjectDiagram className="h-5 w-5 mr-3" />
              ເບິ່ງໂຄງການ
              <FaArrowRight className="ml-2 h-4 w-4" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium 
                       hover:bg-white hover:text-indigo-600 transition-all duration-300 
                       flex items-center backdrop-blur-sm bg-white/10"
            >
              <FaInfoCircle className="h-5 w-5 mr-3" />
              ສຶກສາເພີ່ມເຕີມ
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactSections />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default ProjectsIndex;