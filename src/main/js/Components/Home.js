import React from 'react';
import SearchBar from "./SearchBar";

function Home() {

    return(
        <div className={"home"}>
            <div className={"home-title d-flex flex-column vh-100 w-100 justify-content-center align-items-center"}>
                <p className={"display-1"}>Tunes.io</p>
                <p className={"h5 text-muted"}>Music/Podcast Manager</p>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Home;