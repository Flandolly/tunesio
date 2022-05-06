import React from 'react';
import {useLocation} from "react-router-dom";
import Header from "./Header";
import PopulateData from "../Helpers/PopulateData";

function SongList() {

    const location = useLocation();
    const {data, status} = PopulateData("get", location.state);

    // console.log("Hi");

    return (
        <div className={"song-list-container"}>
            <Header/>
            <div className={"song-list-heading"}>
                <p className={"h6"}>Showing results for "{location.state}"</p>
            </div>
        </div>
    )
}

export default SongList;