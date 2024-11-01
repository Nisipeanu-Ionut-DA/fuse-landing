import React from 'react';

const IconSquare = ({ icon }) => { // Destructure `icon` from props
    return (
        <div className="w-12 h-12 p-[13px] bg-white rounded-[9px] justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative">{icon}</div> {/* Render icon here */}
        </div>
    );
};

export default IconSquare;
