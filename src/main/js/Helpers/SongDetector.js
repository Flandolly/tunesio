import React from 'react';
import axios from 'axios';

function SongDetector(title, artist) {

    const songData = {}

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
            songData.artistId = response.data.track[0].idArtist
            songData.songUrl = response.data.track[0].strMusicVid
            songData.songDesc = response.data.track[0].strDescriptionEN
            songData.songImage = response.data.track[0].strTrackThumb
            console.log(songData);

        })
        .catch(function (error) {
            console.log(error);
        })

    return "";
}

export default SongDetector;