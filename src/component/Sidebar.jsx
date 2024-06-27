import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";
import { categories } from "../utils/Constant";
import SidebarOption from "./SidebarOption";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const { toggle, Categories, setCategories } = useContext(ContextApi);
    const navigate = useNavigate();

    const clickhandler = (name, type) => {
        switch (type) {
            case "category":
                return setCategories(name);
            case "home":
                return setCategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <>
            <div
                className={`md:block w-[240px] overflow-y-auto h-[calc(100%-56px)] md:h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                    toggle ? "translate-x-[0px]" : ""
                }`}
            >
                <div className="px-3 flex flex-col w-full">
                    {categories.map((item) => {
                        return (
                            <>
                                <SidebarOption
                                    key={item}
                                    name={
                                        item.type === "home"
                                            ? "Home"
                                            : item.name
                                    }
                                    icon={item.icon}
                                    action={() => {
                                        clickhandler(item.name, item.type);
                                        navigate("/");
                                    }}
                                    className={`${
                                        Categories === item.name
                                            ? "bg-gray-400/[0.3] font-semibold"
                                            : ""
                                    }`}
                                />
                                {item.divider && (
                                    <hr className={`my-3 border-gray-500`} />
                                )}
                            </>
                        );
                    })}

                    <hr className="my-3  border-gray-500" />
                    <div className={`text-black`}>Clone By Abhinav</div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
