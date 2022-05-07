import React from 'react';
import Header from "./Header";
import {useLocation, useNavigate} from "react-router-dom";
import PopulateData from "../Helpers/PopulateData";
import Song from "./Song";
import {Button} from "reactstrap";

function SongList() {

    const location = useLocation();
    const navigate = useNavigate();
    const {data, status} = PopulateData("get", "search", location.state);

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/new`)
    }

    return (
        <div className={"song-list-container"}>
            <Header/>
            <div className={"song-list-heading d-flex flex-row justify-content-between"}>
                <p className={"h6"}>Showing results for "{location.state}"</p>
                <Button onClick={(e) => handleSubmit(e)} color={"success"} size={"lg"}><strong>+</strong></Button>
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