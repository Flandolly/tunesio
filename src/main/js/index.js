const React = require('react');
import App from './App';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('react')
);