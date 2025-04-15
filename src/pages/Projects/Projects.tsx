import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaSearch, FaStar } from 'react-icons/fa';
import { SiTypescript, SiMongodb} from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';
import md5 from "md5";

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState<number[]>([]);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Load favorites from localStorage
    useEffect(() => {
        const savedFavorites = localStorage.getItem('projectFavorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save favorites to localStorage
    const toggleFavorite = (projectId: number) => {
        const newFavorites = favorites.includes(projectId)
            ? favorites.filter(id => id !== projectId)
            : [...favorites, projectId];
        setFavorites(newFavorites);
        localStorage.setItem('projectFavorites', JSON.stringify(newFavorites));
    };

    const categories = [
        { id: 'all', name: 'All Projects', icon: '🎯' },
        { id: 'web', name: 'ການພັດທະນາເວັບ', icon: '💻' },
        { id: 'ui', name: 'ການອອກແບບ UI/UX', icon: '🎨' },
        { id: 'mobile', name: 'ແອັບຯມືຖື', icon: '📱' },
        { id: 'ai', name: 'ຄວາມຊໍານານເວັບ', icon: '🤖' },
        { id: 'favorite', name: 'Favorite Projects', icon: '❤️' }
    ];

    // Enhanced projects array with more details
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with modern UI and seamless user experience",
            image: "https://dai323vbo0kfx.cloudfront.net/wp-content/uploads/2021/08/Features-To-Consider-Before-Choosing-an-E-commerce-Platform.jpg",
            category: "web",
            featured: true,
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "Node.js", icon: <FaNode /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "TypeScript", icon: <SiTypescript /> }
            ],
            links: [
                { name: "GitHub", url: "https://github.com", icon: <FaGithub className="w-6 h-6" /> },
                { name: "Live Demo", url: "URL_ADDRESScommerce.com", icon: <FaExternalLinkAlt className="w-6 h-6" /> }
            ]
        },
        // Add more projects here
    ];

    // Enhanced filtering logic
    const filteredProjects = projects
        .filter(project => {
            if (filter === 'favorite') return favorites.includes(project.id);
            return filter === 'all' || project.category === filter;
        })
        .filter(project =>
            searchTerm === '' ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Enhanced Header with Search */}
                <motion.div className="text-center mb-16 space-y-8">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                                 bg-clip-text text-transparent p-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        ໂຄງການຂອງຂ້ອຍ
                    </motion.h1>
                    <motion.div 
                        className="relative max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <input
                            type="text"
                            placeholder="ໂຄງການຄົ້ນຫາ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:ring-2 
                                     focus:ring-blue-500 focus:border-transparent pl-12"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </motion.div>
                </motion.div>

                {/* Enhanced Filter Buttons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {categories.map(category => (
                        <motion.button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                                flex items-center gap-2 ${filter === category.id 
                                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1' 
                                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:-translate-y-1'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{category.icon}</span>
                            {!isMobile && category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid with Enhanced Cards */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                key={project.id}
                                // layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                                         transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transform group-hover:scale-105 
                                                 transition-transform duration-300"
                                    />
                                    <motion.button
                                        onClick={() => toggleFavorite(project.id)}
                                        className={`absolute top-4 right-4 p-2 rounded-full z-[10]
                                                  ${favorites.includes(project.id) 
                                                    ? 'bg-yellow-400 text-white' 
                                                    : 'bg-white/80 text-gray-600'}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaStar className="w-5 h-5" />
                                    </motion.button>
                                    <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100
                                                flex items-center justify-center gap-4 transition-opacity duration-300">
                                        {project.links.map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <motion.a
                                        href={`/projects/view/${md5(project.id.toString())}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    </motion.a>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-1 text-sm text-gray-500"
                                            >
                                                <span className="text-blue-600">
                                                    {tech.icon}
                                                </span>
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-500 mt-12"
                    >
                        No projects found. Try adjusting your search or filters.
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}