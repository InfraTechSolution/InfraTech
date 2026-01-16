import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 shadow-lg";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
        secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-slate-200/50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:shadow-none dark:hover:bg-slate-700",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
        ghost: "bg-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 shadow-none",
    };

    const Component = to ? Link : motion.button;
    const linkProps = to ? { to } : { onClick, whileTap: { scale: 0.95 } };

    return (
        <Component
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...linkProps}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
