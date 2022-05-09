import React from 'react';
import axios from 'axios';
import {APIURL} from "../Config/constants";
import {Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {useNavigate} from "react-router-dom";

function Song({song}) {
    const navigate = useNavigate();

    function handleOnMouseOver() {
        document.getElementById(`${song.id}`).style.display = 'inline';
    }

    function handleOnMouseOut() {
        document.getElementById(`${song.id}`).style.display = 'none';
    }

    function handleDelete(event) {
        event.preventDefault();

        axios.delete(`${APIURL}/songs/${song.id}`)
            .then(function(response) {
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <Card className={"flex-row my-3"} body color={"dark"} inverse>
            <CardImg className={"song-image"} src={song.image} alt={song.title}/>
            <CardBody>
                <CardTitle tag={"h4"}>{song.title}</CardTitle>
                <CardSubtitle tag={"h5"} className={"text-muted"}>
                    <i><a onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}
                          target={"_blank"} href={song.source ? song.source : song.audio}>{song.name}</a></i>
                    <span id={`${song.id}`}
                          className={"text-white song-link"}> <small>Click to visit source</small></span>
                </CardSubtitle>
                <CardText id={`song-desc-${song.id}`}>{song.description}</CardText>
                {song.audio.includes(".mp3") ? <audio src={song.audio} controls>Audio element not supported on this platform.</audio> : <iframe width={"420"} height={"315"} src={song.audio.replace("watch?v=", "embed/")}>Music Video</iframe>}
            </CardBody>
            <CardFooter>
                <button onClick={(e) => handleDelete(e)} type={"button"} className={"btn-close btn-close-white"} aria-label={"Close"}/>
            </CardFooter>
        </Card>
    )
}

export default Song;