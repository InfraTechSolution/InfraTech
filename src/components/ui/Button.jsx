import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 shadow-lg";

    const variants = {
        primary: "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30",
        secondary: "bg-white text-slate-900 hover:bg-sky-50 border border-slate-200 shadow-sm",
        outline: "bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-50",
        ghost: "bg-transparent text-slate-600 hover:text-sky-600 hover:bg-sky-50 shadow-none",
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
