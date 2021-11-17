import React, {useState, useEffect} from "react";
import CardList from "./components/CardList";
import CardSearchBar from "./components/CardSearchBar";
import Scroll from "./components/Scroll";
// import {robots} from "../demo_data/robots";

const Body = () => {

    const [state, setState] = useState({
        robots:[],
        searchfield: '',
        clicks: 0
    })

    useEffect(() =>{
        if(state.robots.length === 0){
            fetch('https://jsonplaceholder.typicode.com/users').then(response => {
                return response.json()
            }).then(items => {
                console.log(items)
                setState({...state, robots: items})
            }).catch((error) => {
                console.log(`Error Getting Robots ${error}`)
            })
        }
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
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        </>
    )
}

export default Body;