import Home from "./Components/Home";

const React = require('react');
const axios = require('axios');
import {Route, Routes} from 'react-router-dom';

function App() {
    return(
        <main className={"main"}>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
            </Routes>
        </main>
    )
}

export default App;