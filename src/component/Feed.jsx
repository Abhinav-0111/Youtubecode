import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import ContextApi from "../context/ContextApi";
import Videocard from "./Videocard";

const Feed = () => {
    const { searchResults } = useContext(ContextApi);
    return (
        <>
            <div className="flex flex-row h-[calc(100%-56px)]">
                <Sidebar />
                <div
                    className={`grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-3 md:mt-0 md:p-7">
                        {searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <>
                                    <Videocard
                                        key={item?.video?.videoId}
                                        video={item?.video}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feed;
