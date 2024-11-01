import React from "react";
import Image from "next/image";
import NotificationComponent from "../notifications";
const Header = () => {
    return (
        <div className="flex justify-between items-center py-4">
            {/* Left part for Logo */}
            <div className="flex items-center">
                <Image src="/images/logo.png" alt="Logo" width={128} height={128} />
            </div>
            
            {/* Right part for Button */}
            <div className="flex items-center">
            <NotificationComponent />
            </div>
        </div>
    );
}

export default Header;
