"use client"
import React from 'react';
import { motion } from 'framer-motion';

const IconSquare = (icon) => {
    return (
        <div className="w-12 h-12 p-[13px] bg-white rounded-[9px] justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative" > {icon} </div>
        </div>
    );
};

export default IconSquare;
