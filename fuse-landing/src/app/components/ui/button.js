"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ onClick, label, mode = "default" }) => {
    const gradientStyle =
        "w-full max-w-[265px] h-[60px] sm:h-[70px] md:h-[78px] px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#a07eff] to-[#d8caff] rounded-full shadow justify-center items-center gap-2.5 inline-flex";
    const defaultStyle =
        "w-full max-w-[265px] h-[60px] sm:h-[70px] md:h-[78px] px-6 md:px-10 py-3 md:py-4 bg-[#a07eff] rounded-full shadow justify-center items-center gap-2.5 inline-flex";

    return (
        <motion.div
            className={mode === "Gradient" ? gradientStyle : defaultStyle}
            onClick={onClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="text-white text-lg sm:text-xl font-semibold font-['Poppins']">
                {label}
            </div>
        </motion.div>
    );
};

export default CustomButton;
