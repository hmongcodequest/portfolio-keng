import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode; 
}
export default function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Define page variants
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
            
            <AnimatePresence mode="wait">
                <Sidebar isOpen={isSidebarOpen} />
                <motion.main
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`flex-grow ${isSidebarOpen ? 'ml-60' : 'ml-0'} mt-16 transition-all duration-300 ease-out`}
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            <Footer isSidebarOpen={isSidebarOpen} />
        </div>
    );
}