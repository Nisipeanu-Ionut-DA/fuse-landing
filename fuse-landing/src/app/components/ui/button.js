"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ onClick, label }) => {
    const baseStyle =
        "w-full max-w-[265px] h-[60px] sm:h-[70px] md:h-[78px] px-6 md:px-10 py-3 md:py-4 rounded-full shadow justify-center items-center gap-2.5 inline-flex text-white text-lg sm:text-xl font-semibold font-['Poppins']";
    const defaultBg = "bg-[#a07eff]";
    const gradientBg = "bg-gradient-to-r from-[#a07eff] to-[#d8caff]";

    return (
        <motion.div
            className={`${baseStyle} ${defaultBg}`}
            onClick={onClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
                transition: "background 0.6s ease-in-out, scale 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => e.currentTarget.classList.add(...gradientBg.split(" "))}
            onMouseLeave={(e) => e.currentTarget.classList.remove(...gradientBg.split(" "))}
        >
            {label}
        </motion.div>
    );
};

export default CustomButton;
