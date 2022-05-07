import Home from "./Components/Home";
import SongList from "./Components/SongList";

import React from "react";
import {Route, Routes} from 'react-router-dom';
import SongCreate from "./Components/SongCreate";

function App() {
    return(
        <main className={"main"} style={{padding: "90px 25px"}}>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/search"} exact element={<SongList/>}/>
                <Route path={"/new"} exact element={<SongCreate/>}/>
            </Routes>
        </main>
    )
}

export default App;