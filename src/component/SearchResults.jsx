import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import fetchdatafromApi from "../utils/Api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ContextApi from "../context/ContextApi";
import SearchResultvideocard from "./SearchResultvideocard";

const SearchResults = () => {
    const [results, setresults] = useState([]);
    const { searchQuery } = useParams();
    const { setprogress } = useContext(ContextApi);

    useEffect(() => {
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setprogress("20");
        fetchdatafromApi(`search/?q=${searchQuery}`)
            .then(({ contents }) => {
                setprogress("50");
                setresults(contents);
                setprogress("100");
            })
            .catch((error) => {
                toast.error("Error in fetchSearchResults Function");
            });
    };

    return (
        <>
            <div className="flex flex-row h-[calc(100%-56px)]">
                <Sidebar />
                <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
                    <div className="grid grid-cols-1 gap-2 mt-2 md:mt-0 md:p-5">
                        {results?.map((item) => {
                            if (item?.type !== "video") return false;
                            let video = item.video;
                            return (
                                <SearchResultvideocard
                                    key={video.videoId}
                                    video={video}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResults;
