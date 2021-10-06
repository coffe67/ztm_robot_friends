import React, {useState} from "react";
import CardList from "./components/CardList";
import CardSearchBar from "./components/CardSearchBar";
import {robots} from "../demo_data/robots";

const Body = () => {

    const [state, setState] = useState({
        robots:robots,
        searchfield: '',
        clicks: 0
    })

    const handleChange = (event) =>{
        setState({...state, searchfield: event.currentTarget.value})
    }

    const filterRobots =  state.robots.filter(robot => robot.name.includes(state.searchfield))

    return (
        <>
            <div>
                <h2>Main Content</h2>
                <CardSearchBar searchChange={handleChange}/>
                <CardList robots={filterRobots}/>
            </div>
        </>
    )
}

export default Body;