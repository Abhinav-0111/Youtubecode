import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";
import NumberAbbreviate from "number-abbreviate";

const Videocard = ({ video }) => {
    return (
        <>
            <Link to={`/video/${video.videoId}`}>
                <div className="flex flex-col mb-2 md:mb-7">
                    <div className="relative h-48 md:h-50 xl:h-[255px] md:rounded-xl overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={video?.thumbnails[0]?.url}
                            alt="img"
                        />
                        {video.lengthSeconds && (
                            <VideoLength time={video?.lengthSeconds} />
                        )}
                    </div>
                    <div className="flex text-black mt-3 px-3 md:px-0">
                        <div className="flex items-start">
                            <div className="flex h-9 w-9 md:h-10 md:w-10 rounded-full overflow-hidden">
                                <img
                                    className="h-full w-full object-cover"
                                    src={video?.author?.avatar[0].url}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm md:text-lg font-bold line-clamp-2">
                                {video?.title}
                            </span>
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
                            <div
                                className={`flex text-[15px] font-semibold text-gray-600 truncate overflow-hidden`}
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

export default Videocard;
