import React from "react";

const SidebarOption = ({ name, icon, action, className }) => {
    return (
        <>
            <div
                className={
                    `flex text-black text-sm md:text-[16px] cursor-pointer h-11 items-center px-4 rounded-lg hover:bg-[#E5E5E5] ` +
                    className
                }
                onClick={action}
            >
                <span className="text-xl mr-7">{icon}</span>
                {name}
            </div>
        </>
    );
};

export default SidebarOption;
