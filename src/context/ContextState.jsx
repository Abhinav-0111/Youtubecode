import React, { useEffect, useState } from "react";
import ContextApi from "./ContextApi";
import fetchdatafromApi from "../utils/Api";
import { toast } from "react-toastify";

const ContextState = (props) => {
    const [toggle, settoggle] = useState(false);
    const [Categories, setCategories] = useState("New");
    const [searchResults, setsearchResults] = useState([]);
    const [progress, setprogress] = useState("0");

    const handletoggle = () => {
        settoggle(!toggle);
    };

    useEffect(() => {
        fetchSelectedCategories(Categories);
    }, [Categories]);

    const fetchSelectedCategories = (query) => {
        setprogress("20");
        fetchdatafromApi(`search/?q=${query}`)
            .then(({ contents }) => {
                setprogress("50");
                setsearchResults(contents);
                setprogress("100");
            })
            .catch((error) => {
                toast.error("Error in fetchSelectedCategories Function");
            });
    };

    return (
        <>
            <ContextApi.Provider
                value={{
                    handletoggle,
                    toggle,
                    Categories,
                    setCategories,
                    searchResults,
                    progress,
                    setprogress,
                }}
            >
                {props.children}
            </ContextApi.Provider>
        </>
    );
};

export default ContextState;
