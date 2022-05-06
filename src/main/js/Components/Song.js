import React from 'react';
import {Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function Song({song}) {
    // console.log(song.name);

    function handleOnMouseOver() {
        document.getElementById(`${song.id}`).style.display = 'inline';
    }

    function handleOnMouseOut() {
        document.getElementById(`${song.id}`).style.display = 'none';
    }

    return (
        <Card className={"flex-row my-3"} body color={"dark"} inverse>
            <CardImg className={"song-image"} src={song.image} alt={song.title}/>
            <CardBody>
                <CardTitle tag={"h4"}>{song.title}</CardTitle>
                <CardSubtitle onMouseOver={handleOnMouseOver}
                              onMouseOut={handleOnMouseOut}
                              tag={"h5"}
                              className={"text-muted"}>
                    <i><a target={"_blank"} href={song.source}>{song.name}</a></i>
                    <span id={`${song.id}`}
                          className={"text-white song-link"}> <small>Click to visit source</small></span>
                </CardSubtitle>
                <CardText>{song.description}</CardText>
                <audio src={song.audio} controls>Audio element not supported on this platform.</audio>
            </CardBody>
        </Card>
    )
}

export default Song;