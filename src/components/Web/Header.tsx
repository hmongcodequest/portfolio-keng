import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Logo_Keng from '../../assets/Logo_Keng.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const menu_item = [
    {
      id: 1,
      title: 'ໜ້າຫຼັກ',
      url: '/'
    },
    {
      id: 2,
      title: 'ກ່ຽວກັບ',
      url: '/about'
    },
    {
      id: 3,
      title: 'ໂຄງການ',
      url: '/projects'
    },
    {
      id: 4,
      title: 'ຕິດຕໍ່',
      url: '/contact'
    }
  ]

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 px-8 py-4 bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-gray-100/10 ${isScrolled ? 'h-[70px]' : 'h-[80px]'
        }`}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tight"
          >
            {/* Portfolio */}
            <img src={Logo_Keng} alt="Logo" className="w-30 h-10" />
          </Link>
        </motion.div>

        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-10"
        >
          {menu_item.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to={item.url}
                className={`relative py-2 font-medium transition-colors
                          after:content-[''] after:absolute after:w-0 after:h-0.5 
                          after:bottom-0 after:left-1/2 after:-translate-x-1/2
                          after:bg-gradient-to-r after:from-blue-600 after:to-blue-700
                          hover:after:w-full after:transition-all after:duration-300
                          ${isActive(item.url) 
                            ? 'text-blue-600 after:w-full' 
                            : 'text-gray-700 hover:text-gray-900'
                          }`}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-[70px] left-0 right-0 bg-white/98 backdrop-blur-lg p-6 shadow-lg
                       flex flex-col gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menu_item.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors
                            ${isActive(item.url)
                              ? 'text-blue-600'
                              : 'text-gray-700 hover:text-gray-900'
                            }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;