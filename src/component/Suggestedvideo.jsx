import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";
import NumberAbbreviate from "number-abbreviate";

const Suggestedvideo = ({ video }) => {
    return (
        <>
            <Link to={`/video/${video.videoId}`}>
                <div className="flex flex-col mb-4 md:mb-6 lg:flex-row lg:mb-3">
                    <div className="relative h-48 lg:h-20 xl:h-24 w-full min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] md:rounded-xl bg-slate-800 overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={video?.thumbnails[0]?.url}
                        />
                        {video.lengthSeconds && (
                            <VideoLength time={video?.lengthSeconds} />
                        )}
                    </div>
                    <div
                        className={`flex text-black mt-3 lg:mt-0 px-3 md:mx-0`}
                    >
                        <div className="flex lg:hidden items-start">
                            <div className="flex h-9 w-9 rounded-full overflow-hidden">
                                <img
                                    className="h-full w-full object-cover"
                                    src={video?.author?.avatar[0].url}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                {video?.title}
                            </span>
                            <span
                                className={`text-[12px] flex items-center font-semibold  mt-2 text-black`}
                            >
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill
                                        className={`text-gray-500 text-[12px] ml-1`}
                                    />
                                )}
                            </span>
                            <div
                                className={`flex text-[12px] font-semibold text-gray-500 truncate  overflow-hidden`}
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
                                            className={`flex text-[24px] leading-none font-bold text-gray-500 relative top-[-9px] mx-1`}
                                        >
                                            .
                                        </span>
                                        <span className="truncate  overflow-hidden">
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

export default Suggestedvideo;
