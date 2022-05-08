import React, {useState} from 'react';
import Header from "./Header";
import {useLocation, useNavigate} from "react-router-dom";
import PopulateData from "../Helpers/PopulateData";
import Song from "./Song";
import {Button} from "reactstrap";

function SongList() {

    const location = useLocation();
    const navigate = useNavigate();
    const {data, status} = PopulateData("get", location.state.type, location.state.query);

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/new`)
    }

    // function handleToggle(event) {
    //     event.preventDefault();
    //
    //     const ellipsis = document.getElementById("ellipsis");
    //     const moreText = document.getElementById("more");
    //     const toggleButton = document.getElementById("text-toggle-button");
    //
    //     if (ellipsis.style.display === "none") {
    //         toggleButton.innerHTML = "Read More";
    //         moreText.style.display = "none";
    //         ellipsis.style.display = "inline";
    //     } else {
    //         toggleButton.innerHTML = "Read Less";
    //         moreText.style.display = "inline";
    //         ellipsis.style.display = "none";
    //     }
    // }
    //
    // setTimeout(() => {
    //     const songTexts = document.getElementsByClassName("card-text");
    //
    //     for (let i = 0; i < songTexts.length; i++) {
    //         if (songTexts[i].innerHTML.length >= 255 && !songTexts[i].innerText.substring(0, 260).includes("...")) {
    //             songTexts[i].innerHTML = songTexts[i].innerText.substring(0, 256) + "<span id='ellipsis'>...</span><span id='more'>" + songTexts[i].innerText.substring(256) + "</span>";
    //             const toggleButton = document.createElement("button");
    //             toggleButton.id = "text-toggle-button";
    //             toggleButton.classList.add("btn", "btn-link", "btn-sm");
    //             toggleButton.innerHTML = "Read More";
    //             toggleButton.style.color = "inherit";
    //             toggleButton.addEventListener("click", (e) => handleToggle(e));
    //             songTexts[i].append(toggleButton);
    //         }
    //     }
    //
    // }, 100);

    return (
        <div className={"song-list-container"}>
            <Header/>
            <div className={"song-list-heading d-flex flex-row justify-content-between"}>
                <p className={"h6"}>Showing results for "{location.state.query}"</p>
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