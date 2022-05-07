import React from 'react';
import axios from 'axios';


// This isn't being used.
function SongDetector(title, artist) {

    const songData = {
        songArtist: null,
        songName: null,
        songUrl: null,
        songDesc: null,
        songImage: null
    };

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
            songData.songArtist = response.data.track[0].strArtist
            songData.songName = response.data.track[0].strTrack
            songData.songUrl = response.data.track[0].strMusicVid
            songData.songDesc = response.data.track[0].strDescriptionEN
            songData.songImage = response.data.track[0].strTrackThumb

            // return {
            //     songArtist: response.data.track[0].strArtist,
            //     songName: response.data.track[0].strTrack,
            //     songUrl: response.data.track[0].strMusicVid,
            //     songDesc: response.data.track[0].strDescriptionEN,
            //     songImage: response.data.track[0].strTrackThumb
            // }
        })
        .catch(function (error) {
            console.log(error);
        })
    console.log(songData);
    return songData;
}

export default SongDetector;