'use client';
import React, { useState } from "react";
import CustomButton from "../ui/button";
import IOSSwitch from "../ui/switch";

const Top = () => {
    // State to manage the switch toggle
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    // Toggle switch function
    const handleSwitchChange = (event) => {
        setIsSwitchOn(event.target.checked);
    };

    return (
        <div className="w-full h-[844px] py-[168px] bg-gradient-to-b from-[#8b61ff77] to-[#fefdff77] rounded-[32px] flex-col justify-start items-center gap-20 inline-flex">
            <div className="w-[937.49px] h-[975.80px] relative">
                <div className="w-12 h-12 p-[13px] left-[60px] top-[631.06px] absolute bg-white rounded-[9px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
                <div className="w-12 h-12 p-[13px] left-[241px] top-[608.06px] absolute bg-white rounded-[9px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch h-[250px] flex-col justify-start items-center gap-5 flex">
                <div className="self-stretch text-center text-[#09003f] text-7xl font-semibold font-['Poppins']">
                    Get your work done in a more
                </div>
                <div className="justify-start items-center gap-6 inline-flex">
                    <div className="px-6 py-2 bg-white rounded-xl justify-center items-center gap-2.5 flex">
                        <div className="w-[422px] text-center">
                            <span className="text-[#6a51ff] text-[76px] font-semibold font-['Poppins']">productive</span>
                            <span className="text-[#09003f] text-[76px] font-semibold font-['Poppins']"> </span>
                        </div>
                    </div>
                    <div className="w-[154px] h-[88px] text-center text-[#090040] text-7xl font-semibold font-['Poppins']">
                        way
                    </div>
                </div>
            </div>
            <div className="self-stretch h-[178px] flex-col justify-start items-center gap-10 flex">
                <div className="w-[1342px] text-center text-[#605e87] text-xl font-medium font-['Poppins']">
                    O abordare straightforward de a-ți gestiona proiectele și a-ți atinge mai
                    rapid obiectivele de business — totul într-o platformă intuitivă și ușor de
                    folosit
                </div>
                <CustomButton label="Contacteaza-ne" onClick={() => console.log("Button clicked")} />
                <div className="flex items-center gap-2">
                    <IOSSwitch checked={isSwitchOn} onChange={handleSwitchChange} />
                </div>
            </div>
        </div>
    );
};

export default Top;
