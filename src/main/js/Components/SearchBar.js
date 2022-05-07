import React, {useState} from "react";
import {Button, Input, InputGroup} from "reactstrap";
import {useNavigate} from "react-router-dom";

function SearchBar() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function handleInput(input) {
        return setInput(input.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/search`, {
            state: {
                query: input,
                type: "search"
            }
        });
    }

    return (
        <div className={"search-bar-container w-100"}>
            <InputGroup className={"search-bar"}>
                <Input className={"input"} value={input} onChange={(e) => handleInput(e)} placeholder="Title/Name"/>
                <Button className={"search-button"} onClick={(e) => handleSubmit(e)} disabled={!input}>Search</Button>
            </InputGroup>
        </div>
    )
}

export default SearchBar;