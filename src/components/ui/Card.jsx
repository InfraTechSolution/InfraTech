import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
