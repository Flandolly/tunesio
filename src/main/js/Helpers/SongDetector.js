import React, {useEffect, useState} from 'react';
import {APIURL} from "../Config/constants";
import axios from 'axios';

function SongDetector(title, artist) {
    const [data, setData] = useState({});
    const [status, setStatus] = useState("loading");

    useEffect(() => {

    }, [title, artist])
}

export default SongDetector;