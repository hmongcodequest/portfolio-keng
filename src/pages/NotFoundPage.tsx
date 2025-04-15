import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-red-700 mb-4">404</h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 relative">
            ບໍ່ພົບໜ້າ
            </h2>
          </motion.div>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
          ອຸຍ! ຫນ້າທີ່ເຈົ້າກໍາລັງຊອກຫາບໍ່ມີຢູ່ຫຼືຖືກຍ້າຍ.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 
                         rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              ກັບໄປໜ້າຫຼັກ
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm">
          ຖ້າທ່ານຄິດວ່ານີ້ແມ່ນຄວາມຜິດພາດ, ກະລຸນາ{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
            ຕິດຕໍ່ພວກເຮົາ
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}