import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {Alert, Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {APIURL} from "../Config/constants";

function SongCreate() {

    const [disable, setDisable] = useState(true);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [songIsLink, setSongIsLink] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();

    function handleChange(event) {
        if (event.target.id === "song-title") {
            setTitle(event.target.value);
        }
        if (event.target.id === "song-artist") {
            setArtist(event.target.value);
        }
    }

    function handleSongDetector(event) {
        event.preventDefault();

        axios.get("https://theaudiodb.p.rapidapi.com/searchtrack.php", {
            headers: {
                'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_AUDIODB_RAPIDAPI_APIKEY
            },
            params: {
                s: artist,
                t: title
            }
        })
            .then(function (response) {

                if (response.data.track === null) {
                    return null;
                }

                document.getElementById("song-artist").value = response.data.track[0].strArtist
                document.getElementById("song-title").value = response.data.track[0].strTrack
                document.getElementById("song-url").value = response.data.track[0].strMusicVid
                document.getElementById("song-description").value = response.data.track[0].strDescriptionEN
                document.getElementById("song-album").value = response.data.track[0].strTrackThumb
                document.getElementById("radio-link").checked = true;
                setSongIsLink(true);
                setSuccess(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function handleRadio(event) {
        if (event.target.id === "radio-link") {
            setSongIsLink(true);
        }
        if (event.target.id === "radio-mp3") {
            setSongIsLink(false);
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(document.getElementById("song-form"));
        const newSong = {
            name: formData.get("artist"),
            description: formData.get("description"),
            source: formData.get("source"),
            audio: formData.get("url"),
            image: formData.get("album-url"),
            title: formData.get("title")
        }
        console.log(newSong);

        axios.post(`${APIURL}/songs`, newSong)
            .then(function (response) {
                navigate(`/search`, {
                    state: {
                        type: "update",
                        query: ""
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        if (title && artist) {
            setDisable(false);
        }
    });

    return (
        <div className={"song-creation-container"}>
            <Header/>
            <Alert style={{display: alert ? "block" : "none"}} color={"info"} toggle={() => setAlert(!alert)}
                   onClick={() => setAlert(false)}>Song could not be auto-detected.</Alert>
            <Alert style={{display: success ? "block" : "none"}} color={"success"} toggle={() => setSuccess(!success)}
                   onClick={() => setSuccess(false)}>Song found! Field(s) populated.</Alert>
            <p className={"h2"}>Add New Song/Podcast</p>
            <Form id={"song-form"}>
                <FormGroup id={"song-title-cont"} row>
                    <Col sm={10}>
                        <Label for={"song-title"}>Title</Label>
                        <Input required id={"song-title"} onChange={(e) => handleChange(e)} value={title} name={"title"}
                               placeholder={"Song/Podcast Title"}/>
                    </Col>
                </FormGroup>
                <FormGroup id={"song-artist-cont"} row>
                    <Col sm={10}>
                        <Label for={"song-artist"}>Artist</Label>
                        <Input required id={"song-artist"} onChange={(e) => handleChange(e)} value={artist}
                               name={"artist"} placeholder={"Song/Podcast Artist"}/>
                    </Col>
                </FormGroup>
                <Button color={"info"} size={"sm"} onClick={(e) => handleSongDetector(e)} outline disabled={disable}>Auto-Detect
                    Song</Button>
                <FormGroup id={"song-description-cont"} row>
                    <Col sm={10}>
                        <Label for={"song-description"}>Description</Label>
                        <Input required id={"song-description"} name={"description"}
                               placeholder={"Song/Podcast Description"} type={"textarea"}/>
                    </Col>
                </FormGroup>
                <FormGroup id={"song-legend-cont"} row tag={"fieldset"}>
                    <legend id={"song-legend"} className={"col-form-label col-sm-2"}>Audio Type</legend>
                    <Col sm={10}>
                        <FormGroup check inline>
                            <Input required onChange={(e) => handleRadio(e)} name={"radio"} id={"radio-mp3"}
                                   type={"radio"}/>
                            <Label check>MP3</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input onChange={(e) => handleRadio(e)} name={"radio"} id={"radio-link"} type={"radio"}/>
                            <Label check>External URL</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup id={"song-url-cont"} row>
                    <Col sm={10}>
                        <Label for={"song-url"}>Audio URL</Label>
                        <Input required id={"song-url"} name={"url"} placeholder={"Song/Podcast URL"}/>
                    </Col>
                </FormGroup>
                <FormGroup id={"song-album-cont"} row>
                    <Col sm={10}>
                        <Label for={"song-album"}>Album Image</Label>
                        <Input required id={"song-album"} name={"album-url"}
                               placeholder={"Song/Podcast Album Image URL"}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-source"}>Source URL (if mp3)</Label>
                        <Input required={!songIsLink} id={"song-source"} disabled={songIsLink} name={"source"}
                               placeholder={"Podcast Source URL"}/>
                    </Col>
                </FormGroup>
                <Button onClick={(e) => handleFormSubmit(e)} color="danger">Submit</Button>
            </Form>
        </div>
    )
}

export default SongCreate;