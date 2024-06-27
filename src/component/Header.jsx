import React, { useContext, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate, useParams } from "react-router-dom";
import youtubelogo from "../assets/images/yt-logo.png";
import logo from "../assets/images/youtube.png";
import mobilelogo from "../assets/images/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import ContextApi from "../context/ContextApi";
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
    const { searchQuery } = useParams();
    const [search, setsearch] = useState(searchQuery || "");
    const { toggle, handletoggle } = useContext(ContextApi);
    const navigate = useNavigate();

    const Searchhandler = (event) => {
        if (
            (event?.key === "Enter" ||
                event === "searchButton" ||
                event?.which === 13) &&
            search.length > 0
        ) {
            navigate(`/searchResults/${search}`);
        }
    };

    return (
        <>
            <div className="sticky top-0 z-10 bg-white flex flex-row items-center justify-between h-[56px] md:h-[64px] px-3 md:px-5">
                <div className="flex items-center">
                    <div
                        className="flex md:hidden items-center justify-center cursor-pointer h-11 w-11 rounded-full hover:bg-[#E5E5E5]/[0.6]"
                        onClick={handletoggle}
                    >
                        {toggle ? (
                            <RiMenu2Fill className="text-black text-xl" />
                        ) : (
                            <>
                                <SlMenu className="text-black text-xl" />
                            </>
                        )}
                    </div>
                    <Link
                        to="/"
                        className="flex h-[33px] items-center"
                        onClick={() => {
                            setsearch("");
                        }}
                    >
                        <img
                            src={logo}
                            alt="img not found"
                            className="h-full hidden md:block ml-2"
                        />
                        <img
                            src={mobilelogo}
                            alt="img not found"
                            className="h-[80%] md:hidden ml-3"
                        />
                    </Link>
                </div>
                <div className="group flex items-center">
                    <div className="flex h-8 md:h-11 md:ml-10 md:pl-5 border border-[#30303047] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                            <IoIosSearch className="text-black text-xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => {
                                setsearch(e.target.value);
                            }}
                            value={search}
                            onKeyUp={Searchhandler}
                            className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-[120px] md:group-focus-within:pl-0 md:w-[265px] lg:w-[550px] placeholder:text-[18px]"
                        />
                        <div className="flex items-center justify-center">
                            {search && (
                                <div
                                    className="flex h-8 w-8 items-center justify-center hover:bg-[#E5E5E5]/[0.6] rounded-full cursor-pointer mr-2"
                                    onClick={() => {
                                        setsearch("");
                                    }}
                                >
                                    <CgClose className="text-black text-xl " />
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className={`w-[40px] md:w-[75px] h-8 md:h-11 flex items-center justify-center border border-l-0 text-black border-[#30303047] rounded-r-3xl bg-[#F8F8F8] hover:bg-[#E5E5E5]`}
                        onClick={() => {
                            Searchhandler("searchButton");
                        }}
                    >
                        <IoIosSearch className={`text-black text-[27px]`} />
                    </button>
                    <div className=" hidden md:flex w-11 h-11 items-center justify-center rounded-full cursor-pointer bg-[#e5e5e582] hover:bg-[#E5E5E5] ml-5">
                        <FaMicrophone className="text-black text-[20px]" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="hidden md:flex gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full cursor-pointer hover:bg-[#E5E5E5]">
                            <RiVideoAddLine className="text-black text-[22px]" />
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full cursor-pointer hover:bg-[#E5E5E5]">
                            <FiBell className="text-black text-[22px]" />
                        </div>
                    </div>
                    <div className="flex relative cursor-pointer h-8 w-8 md:h-9 md:w-9 overflow-hidden rounded-full ml-[13px]">
                        <img
                            src={mobilelogo}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
