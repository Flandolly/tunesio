import React, {useEffect, useState} from 'react';
import {APIURL} from "../Config/constants";
import axios from 'axios';

function PopulateData(method, type, params) {
    const [data, setData] = useState({});
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        switch (method) {
            case "get":
                if (type === "search") {
                    axios.get(`${APIURL}/songs/search`, {params: {query: params}})
                        .then(function (response) {
                            setData(response.data);
                            setStatus("success");
                        })
                        .catch(function (error) {
                            console.log(error);
                            setStatus("error");
                        })
                } else {
                    axios.get(`${APIURL}/songs/${params}`)
                        .then(function (response) {
                            setData(response.data);
                            setStatus("success")
                        })
                        .catch(function (error) {
                            console.log(error);
                            setStatus("error");
                        })
                }
                break;
            case "post":
                break;
            case "put":
                break;
            case "delete":
                break;
            default:
                return {"message": "An error occurred while populating data."};
        }
    }, [params]);

    return {
        data, status
    }
}

export default PopulateData;