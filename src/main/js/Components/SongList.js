import React from 'react';
import Header from "./Header";
import {useLocation} from "react-router-dom";
import PopulateData from "../Helpers/PopulateData";
import Song from "./Song";

function SongList() {

    const location = useLocation();
    const {data, status} = PopulateData("get", "search", location.state);

    return (
        <div className={"song-list-container"}>
            <Header/>
            <div className={"song-list-heading"}>
                <p className={"h6"}>Showing results for "{location.state}"</p>
            </div>
            <div className={"song-list"}>
                {status === "loading" ? <div>Loading...</div> : null}
                {status === "success" ? data.length !== undefined ? data.map((song, idx) => (
                    <div className={"song-result"} key={idx}>
                        <Song song={song}/>
                    </div>)) : <div>{data.message}</div> : null}
            </div>
        </div>
    )
}

export default SongList;