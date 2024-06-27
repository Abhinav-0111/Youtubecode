import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
import NumberAbbreviate from "number-abbreviate";

const SearchResultvideocard = ({ video }) => {
    return (
        <>
            <Link to={`/video/${video.videoId}`}>
                <div className="flex flex-col md:flex-row mb-3 md:mb-1 rounded-xl md:p-2">
                    <div className="relative shrink-0 h-48 md:h-[310px] md:w-[580px]  md:rounded-xl overflow-hidden ">
                        <img
                            className="h-full w-full object-cover"
                            src={video?.thumbnails[0]?.url}
                            alt="img"
                        />
                        {video.lengthSeconds && (
                            <VideoLength time={video?.lengthSeconds} />
                        )}
                    </div>
                    <div className="flex text-black mt-3 px-1 md:px-0 md:ml-4">
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm md:text-lg font-bold line-clamp-2">
                                {video?.title}
                            </span>
                            <div className="flex items-center mt-2">
                                <div className="flex h-6 w-6 rounded-full overflow-hidden mr-2">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={video?.author?.avatar[0].url}
                                    />
                                </div>
                                <span
                                    className={`text-[15px] font-semibold mt-1 text-gray-600 flex items-center`}
                                >
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                        "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill
                                            className={`text-gray-600 ml-1`}
                                        />
                                    )}
                                </span>
                            </div>

                            <div
                                className={`flex text-[15px] font-semibold text-gray-600 truncate overflow-hidden mt-2`}
                            >
                                {video?.stats?.views && (
                                    <span>{`${NumberAbbreviate(
                                        video?.stats?.views,
                                        2
                                    )} views`}</span>
                                )}
                                {video?.publishedTimeText && (
                                    <>
                                        <span
                                            className={`flex text-[24px] leading-none font-bold text-gray-600 relative top-[-9px] mx-1`}
                                        >
                                            .
                                        </span>
                                        <span className="truncate">
                                            {video?.publishedTimeText}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SearchResultvideocard;
