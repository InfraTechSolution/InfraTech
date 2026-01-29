import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import logo2 from '../../assets/logo2.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollY } = useScroll();

    // Animation mapping (0 to 100px scroll)
    const scrollThreshold = 100;

    // Logo Transitions
    const baseLogoX = useTransform(scrollY, [0, scrollThreshold], ["0%", isMobile ? "0%" : "-450%"]);
    const baseLogoScale = useTransform(scrollY, [0, scrollThreshold], [1, 0.75]);
    const logoY = useTransform(scrollY, [0, scrollThreshold], [0, 0]);

    // Smooth physics versions
    const logoX = useSpring(baseLogoX, { stiffness: 100, damping: 30, mass: 1 });
    const logoScale = useSpring(baseLogoScale, { stiffness: 100, damping: 30, mass: 1 });

    // Brand & Menu Transitions (Fade out)
    const brandOpacity = useTransform(scrollY, [0, 60], [1, 0]);
    const brandBlur = useTransform(scrollY, [0, 60], ["blur(0px)", "blur(12px)"]);
    const brandX = useTransform(scrollY, [0, 60], [0, -30]);

    // Horizontal Links Transitions (Fade in)
    const linksOpacity = useTransform(scrollY, [60, scrollThreshold], [0, 1]);
    const linksY = useTransform(scrollY, [60, scrollThreshold], [15, 0]);

    // Background Transitions
    const navPadding = useTransform(scrollY, [0, scrollThreshold], ["8px", "4px"]); // py-2 to py-1 (approx)
    const navShadow = useTransform(
        scrollY,
        [0, scrollThreshold],
        ["0px 1px 2px rgba(0,0,0,0)", "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)"]
    );

    // Keep the 'scrolled' boolean just for route change logic / other simple toggle needs if any
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Enterprise Solutions', path: '/services#enterprise' },
                { name: 'Fintech', path: '/services#finance' },
                { name: 'Retail & E-Commerce', path: '/services#retail' },
                { name: 'Manufacturing & IoT', path: '/services#manufacturing' },
                { name: 'Cloud Computing', path: '/services#cloud' },
                { name: 'Cybersecurity', path: '/services#cybersecurity' },
            ]
        },
        { name: 'Mission', path: '/mission' },
    ];

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.nav
            style={{
                paddingTop: navPadding,
                paddingBottom: navPadding,
                boxShadow: navShadow
            }}
            className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center h-12 md:h-16 relative overflow-visible">

                    {/* LEFT SECTION: Hamburger & Brand (Top State) */}
                    <div className="flex justify-start items-center gap-2 -ml-4 sm:-ml-6 lg:-ml-8 relative">
                        {/* Hamburger - Always visible on mobile, fades on desktop scroll */}
                        <motion.button
                            style={{ opacity: typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : brandOpacity }}
                            onClick={() => setIsOpen(true)}
                            className="p-2 text-slate-700 hover:text-sky-600 focus:outline-none transition-colors shrink-0 z-10"
                            aria-label="Open menu"
                        >
                            <Menu className="h-7 w-7" />
                        </motion.button>

                        {/* Brand Name - Fades/Blurs out */}
                        <motion.span
                            style={{
                                opacity: brandOpacity,
                                filter: brandBlur,
                                x: brandX
                            }}
                            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent whitespace-nowrap pointer-events-none"
                        >
                            Infra Tech
                        </motion.span>
                    </div>

                    {/* CENTER SECTION: Logo & Horizonatal Links */}
                    <div className="flex justify-center items-center h-full relative">
                        {/* The Unified Animating Logo */}
                        <motion.div
                            style={{
                                x: logoX,
                                scale: logoScale,
                                y: logoY
                            }}
                            className="absolute z-20"
                        >
                            <Link to="/" className="flex items-center">
                                <img src={logo2} alt="Infra Tech Logo" className="h-12 md:h-16 w-auto" loading="lazy" />
                            </Link>
                        </motion.div>

                        {/* Horizontal Links (Desktop only, emerge as logo moves) */}
                        <motion.div
                            style={{
                                opacity: linksOpacity,
                                y: linksY
                            }}
                            className="hidden lg:flex items-center gap-8 h-full"
                        >
                            {navLinks.map((link) => (
                                link.dropdown ? (
                                    <div
                                        key={link.name}
                                        className="relative h-full flex items-center"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <button className={`flex items-center gap-1 font-medium transition-colors ${location.pathname === link.path || link.dropdown?.some(sub => sub.path.split('#')[0] === location.pathname)
                                            ? 'text-sky-600'
                                            : 'text-slate-700 hover:text-sky-600'
                                            }`}>
                                            {link.name} <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-4 border border-slate-100"
                                                >
                                                    {link.dropdown.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            to={sub.path}
                                                            className="block px-6 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-sky-600'
                                            : 'text-slate-700 hover:text-sky-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT SECTION: Standard Actions */}
                    <div className="flex-1 flex justify-end">
                        <Link
                            to="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-95 whitespace-nowrap"
                        >
                            Book A Call
                        </Link>
                    </div>
                </div>
            </div>

            {/* Side Drawer Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[350px] bg-white dark:bg-slate-900 shadow-2xl z-[120] overflow-y-auto"
                        >
                            <div className="flex flex-col h-full">
                                {/* Drawer Header */}
                                <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <img src={logo2} alt="Logo" className="h-10 w-auto" />
                                        <span className="font-bold text-lg bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
                                            Infra Tech
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Drawer Links */}
                                <div className="flex-1 px-4 py-6 space-y-2">
                                    {navLinks.map((link) => (
                                        <div
                                            key={link.name}
                                            className="space-y-1"
                                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors cursor-pointer ${location.pathname === link.path || activeDropdown === link.name
                                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                                                    }`}
                                                onClick={() => {
                                                    if (link.dropdown) {
                                                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                                                    } else {
                                                        setIsOpen(false);
                                                    }
                                                }}
                                            >
                                                <Link to={link.path} className="flex-1" onClick={(e) => link.dropdown && e.preventDefault()}>
                                                    {link.name}
                                                </Link>
                                                {link.dropdown && (
                                                    <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {link.dropdown && activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-4 pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-1 py-1">
                                                            {link.dropdown.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    to={item.path}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                {/* Drawer Footer */}
                                <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
                                    >
                                        Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>

    );
};

export default Navbar;
