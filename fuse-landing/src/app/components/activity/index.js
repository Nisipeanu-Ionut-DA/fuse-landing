import React from "react";

const ActivityComponent = ({ icon }) => {
    return (
        <div className="w-96 h-48 flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-3 flex">
                <div className="flex-col justify-center items-start gap-3 flex">
                <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-7 h-7 relative" />
                    <div className="text-white text-xl font-normal ">Activity</div>
                </div>
                </div>
                <div className="self-stretch h-14 px-5 py-2.5 bg-[#fafafe] rounded-tl-lg rounded-bl-lg border justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#8b8b8b] text-base font-normal ">Activity</div>
                </div>
            </div>
            <div className="justify-start items-start inline-flex">
                <div className="px-4 py-2 bg-[#8d8bdb] rounded-full justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-normal ">Meeting</div>
                </div>
            </div>
            <div className="justify-start items-start inline-flex">
                <div className="px-4 py-2 bg-[#8d8bdb] rounded-full justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-normal ">Task</div>
                </div>
            </div>
        </div>
    );
}

export default ActivityComponent;