import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContextApi from "../context/ContextApi";
import fetchdatafromApi from "../utils/Api";
import { toast } from "react-toastify";
import NumberAbbreviate from "number-abbreviate";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import Suggestedvideo from "./Suggestedvideo";

const Videodetails = () => {
    const [video, setvideo] = useState([]);
    const [relatedvideo, setrelatedvideo] = useState([]);
    const { id } = useParams();
    const { setprogress } = useContext(ContextApi);

    useEffect(() => {
        fetchRelatedVideo();
        fetchVideoDetails();
    }, id);

    console.log(video);
    // console.log(relatedvideo);
    const fetchVideoDetails = () => {
        setprogress("20");
        fetchdatafromApi(`video/details/?id=${id}`)
            .then((res) => {
                setprogress("70");
                setvideo(res);
                setprogress("100");
            })
            .catch((err) => {
                toast.error("Error in fetchVideodetails function");
            });
    };

    const fetchRelatedVideo = () => {
        setprogress("20");
        fetchdatafromApi(`video/related-contents/?id=${id}`)
            .then(({ contents }) => {
                setprogress("70");
                setrelatedvideo(contents);
                setprogress("100");
            })
            .catch((error) => {
                toast.error("Error in fetchRelatedVideo Function");
            });
    };
    return (
        <>
            <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white">
                <div className="w-full max-w-[1400px] flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-1 py-3 lg:py-6 overflow-y-auto rounded-xl">
                        <div className="h-[200px] relative md:h-[400px] lg:h-[400px] xl:h-[560px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${id}`}
                                controls
                                width="100%"
                                height="100%"
                                playing={true}
                                style={{
                                    backgroundColor: "white",
                                }}
                            ></ReactPlayer>
                        </div>
                        <div
                            className={`text-black font-bold text-sm md:text-xl mt-4 line-clamp-2`}
                        >
                            {video?.title}
                        </div>
                        <div className="flex justify-between flex-col md:flex-row mt-4">
                            <div className="flex">
                                <div className="flex items-start">
                                    {video?.author?.avatar[0].url && (
                                        <div className="flex h-10 w-10 md:h-11 md:w-11 rounded-full overflow-hidden">
                                            <img
                                                className="h-full w-full object-cover"
                                                src={
                                                    video?.author?.avatar[0].url
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col ml-3">
                                    <div
                                        className={`text-black text-[13px] md:text-[16px]  font-semibold flex items-center`}
                                    >
                                        {video?.author?.title}
                                        {video?.author?.badges[0]?.type ===
                                            "VERIFIED_CHANNEL" && (
                                            <BsFillCheckCircleFill
                                                className={`text-gray-500 text-[11px] ml-1`}
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={`flex text-gray-500 text-[12px] md:text-sm`}
                                    >
                                        {video?.author?.stats?.subscribersText}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text_white mt-4 md:mt-0">
                                {video?.stats?.likes && (
                                    <div
                                        className={`flex items-center text-black justify-center h-9 px-4 md:h-11 md:px-6 rounded-3xl bg-gray-400/[0.3]`}
                                    >
                                        <AiOutlineLike
                                            className={`text-xl text-black mr-2`}
                                        />
                                        <span>{`${NumberAbbreviate(
                                            video?.stats?.likes,
                                            2
                                        )} likes`}</span>
                                    </div>
                                )}
                                {video?.stats?.views && (
                                    <div
                                        className={`flex items-center text-black justify-center h-9 px-4 md:h-11 md:px-6 rounded-3xl bg-gray-400/[0.3] ml-4`}
                                    >
                                        <IoEyeSharp
                                            className={`text-xl text-black mr-2`}
                                        />
                                        <span>{`${NumberAbbreviate(
                                            video?.stats?.views,
                                            2
                                        )} views`}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 md:px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] overflow-x-hidden">
                        {relatedvideo.map((item, index) => {
                            if (item.type !== "video") return false;
                            return (
                                <Suggestedvideo
                                    key={index}
                                    video={item?.video}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Videodetails;
