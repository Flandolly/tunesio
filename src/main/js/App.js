import Home from "./Components/Home";

const React = require('react');
const axios = require('axios');
import {Route, Routes} from 'react-router-dom';
import SongList from "./Components/SongList";

function App() {
    return(
        <main className={"main"}>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/search"} exact element={<SongList/>}/>
            </Routes>
        </main>
    )
}

export default App;