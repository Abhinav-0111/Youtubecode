import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Feed from "./component/Feed";
import SearchResults from "./component/SearchResults";
import Videodetails from "./component/Videodetails";
import Nopage from "./component/Nopage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./context/ContextApi";
import LoadingBar from "react-top-loading-bar";

const App = () => {
    const { progress } = useContext(ContextApi);
    return (
        <>
            <BrowserRouter>
                <>
                    <div className="flex flex-col h-full">
                        <LoadingBar
                            height={3}
                            color="#f11946"
                            progress={progress}
                        />
                        <Header />
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<Feed />}
                            />
                            <Route
                                path="/searchResults/:searchQuery"
                                element={<SearchResults />}
                            />
                            <Route
                                path="/video/:id"
                                element={<Videodetails />}
                            />
                            <Route
                                path="*"
                                element={<Nopage />}
                            />
                        </Routes>
                    </div>
                </>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};

export default App;
