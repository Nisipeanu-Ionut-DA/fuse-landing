'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../ui/button";
import IOSSwitch from "../ui/switch";
import { LinePattern, SettingsIconSVG } from "@/app/svgs";
import IconSquare from "../ui/iconSquare";
import { NotificationSVG } from "@/app/svgs";
import TimeSetter from "../timer";
import ActivityComponent from "../activity";

const Top = () => {
    const [isSwitchOn1, setIsSwitchOn1] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);

    const handleSwitchChange1 = (event) => {
        setIsSwitchOn1(event.target.checked);
    };

    const handleSwitchChange2 = (event) => {
        setIsSwitchOn2(event.target.checked);
    };

    const waveMotion = {
        y: ["0%", "-10%", "0%"], // Moves up and back down
        x: ["0%", "-5%", "0%"],  // Moves left and back
        rotate: [0, -10, 10, 0] // Gently rotates left, right, and back
    };

    const waveTransition = {
        duration: 4,             // Slow wave-like duration
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",    // Reverses smoothly
    };

    return (
        <div className="relative w-full h-auto md:h-[844px] py-10 md:py-[168px] bg-gradient-to-b from-[#8b61ff77] to-[#fefdff77] rounded-[32px] flex flex-col justify-start items-center gap-10 md:gap-20">
            
            {/* Background Line Pattern */}
            <div className="hidden sm:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-[120%] h-[120%]">
                    <LinePattern />
                </div>
            </div>

            {/* Floating Icon Squares */}
            <motion.div
                className="hidden sm:block absolute top-[50%] left-[4%] p-2 rounded-md"
                animate={waveMotion}
                transition={waveTransition}
            >
                <IconSquare icon={<NotificationSVG />} />
            </motion.div>

            <motion.div
                className="hidden sm:block absolute top-[45%] left-[15%] p-2 rounded-md"
                animate={waveMotion}
                transition={waveTransition}
            >
                <IconSquare icon={<SettingsIconSVG />} />
            </motion.div>

            {/* Floating Switches with Rotation */}
            <motion.div
                className="hidden sm:block absolute top-[10%] left-[25%] p-2 rounded-md"
                animate={waveMotion}
                transition={waveTransition}
            >
                <IOSSwitch checked={isSwitchOn1} onChange={handleSwitchChange1} />
            </motion.div>

            <motion.div
                className="hidden sm:block absolute top-[23%] left-[15%] p-2 rounded-md"
                animate={{
                    ...waveMotion,
                    rotate: [0, 8, -8, 0] // Different rotation pattern for variation
                }}
                transition={{
                    ...waveTransition,
                    duration: 5.5, // Slightly different duration for variation
                }}
            >
                <IOSSwitch checked={isSwitchOn2} onChange={handleSwitchChange2} />
            </motion.div>

            {/* Timer Component */} 
            <div className="hidden sm:block absolute bottom-[-3%] left-[1%] lg:bottom-8 lg:left-[16%] p-2 rounded-md">
                <TimeSetter />
            </div>
            
            <div className="hidden lg:block absolute bottom-14 right-[5%] p-2 rounded-md">
                <ActivityComponent />
            </div>

            {/* Content */}
            <div className="self-stretch h-auto flex flex-col justify-start items-center gap-5 z-10">
                <div className="text-center text-[#09003f] p-4 text-4xl sm:text-5xl md:text-7xl font-semibold  ">
                    Get your work done in a more
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
                    <div className="px-4 py-2 bg-white rounded-xl flex justify-center items-center">
                        <div className="text-center">
                            <span className="text-[#6a51ff] text-4xl sm:text-5xl md:text-[76px] font-semibold ">productive</span>
                        </div>
                    </div>
                    <div className="text-center text-[#090040] text-4xl sm:text-5xl md:text-7xl font-semibold ">
                        way
                    </div>
                </div>
            </div>
            <div className="self-stretch h-auto flex flex-col justify-start items-center gap-5 md:gap-10">
                <div className="w-full max-w-screen-md mx-auto px-4 text-center text-[#605e87] text-base sm:text-lg md:text-xl font-medium ">
                    O abordare straightforward de a-ți gestiona proiectele și a-ți atinge mai
                    rapid obiectivele de business — totul într-o platformă intuitivă și ușor de
                    folosit
                </div>
                <CustomButton label="Contacteaza-ne" onClick={() => console.log("Button clicked")} />
            </div>
        </div>
    );
};

export default Top;
