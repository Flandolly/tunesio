import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

function SongCreate() {

    const [disable, setDisable] = useState(true);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    function handleChange(event) {
        if (event.target.id === "song-title") {
            setTitle(event.target.value);
        }
        if (event.target.id === "song-artist") {
            setArtist(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    useEffect(() => {
        if (title && artist) {
            setDisable(false);
        }
    });

    return (
        <div className={"song-creation-container"}>
            <Header/>
            <p className={"h2"}>Add New Song/Podcast</p>
            {/*<div style={{marginLeft: "auto", marginRight: 0}}className={"song-image"}>*/}
            {/*</div>*/}
            <Form>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-title"}>Title</Label>
                        <Input id={"song-title"} onChange={(e) => handleChange(e)} value={title} name={"title"} placeholder={"Song/Podcast Title"}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-artist"}>Artist</Label>
                        <Input id={"song-artist"} onChange={(e) => handleChange(e)} value={artist} name={"artist"} placeholder={"Song/Podcast Artist"}/>
                    </Col>
                </FormGroup>
                <Button color={"info"} size={"sm"} onClick={(e) => handleSubmit(e)}outline disabled={disable}>Auto-Detect Song</Button>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-description"}>Description</Label>
                        <Input id={"song-description"} name={"description"} placeholder={"Song/Podcast Description"} type={"textarea"}/>
                    </Col>
                </FormGroup>
                <FormGroup row tag={"fieldset"}>
                    <legend className={"col-form-label col-sm-2"}>Audio Type</legend>
                    <Col sm={10}>
                        <FormGroup check inline>
                            <Input name={"radio"} type={"radio"}/>
                            <Label check>MP3</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input name={"radio"} type={"radio"}/>
                            <Label check>External URL</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-url"}>Audio URL</Label>
                        <Input id={"song-url"} name={"url"} placeholder={"Song/Podcast URL"}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label for={"song-album"}>Album URL</Label>
                        <Input id={"song-album"} name={"album-url"} placeholder={"Song/Podcast Album Image URL"}/>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SongCreate;