import React from 'react';
import {useLocation} from "react-router-dom";
import Header from "./Header";

function SongList() {

    const location = useLocation();

    return (
        <div className={"song-list"}>
            <Header/>
            {location.state}
        </div>
    )
}

export default SongList;