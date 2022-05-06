import React, {useEffect, useState} from 'react';
import {APIURL} from "../Config/constants";
import axios from 'axios';

function PopulateData(method, params) {
    const [data, setData] = useState({});
    const [status, setStatus] = useState("");

    useEffect(() => {
        setStatus("loading");
        switch (method) {
            case "get":
                if (params) {
                    axios.get(`${APIURL}/songs/search`, {params: {query: params}})
                        .then(function (response) {
                            console.log(response.data);
                            console.log(response.data.length === undefined);
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