import Home from "./Components/Home";
import SongList from "./Components/SongList";

import React from "react";
import {Route, Routes} from 'react-router-dom';

function App() {
    return(
        <main className={"main"} style={{padding: "90px 25px"}}>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/search"} exact element={<SongList/>}/>
            </Routes>
        </main>
    )
}

export default App;