import React, {useState, useEffect} from "react";
// import {robots} from "../../demo_data/robots";

const Card = ({name, id, email}) => {

    const [state, setState] = useState({
        clicks: [],
        total: 0
    })

    useEffect(() =>{
        console.log('Effect By Click Change')
        if(state.clicks.length > 0){
            console.log(`Clicks: ${state.clicks}`)
        }
    }, [state.clicks])

    useEffect(() =>{
        if(state.total > 0){
            console.log('Effect By total Change')
            console.log(`Current Total: ${state.total}`)
        }
    }, [state.total])

    const handleClick = async (event) =>{
        const elem = event.currentTarget;
        let currentClicks = state.clicks;
        let total = state.total;
        total += 1;
        currentClicks.push(elem.dataset.id)
        console.log(`Robots Before SetState ${state.clicks}`)
        console.log(`Click Event Current State: ${currentClicks}`)
        await setState({...state, clicks: currentClicks, total: total})
        console.log(`Robots After SetState ${state.clicks}`)
        console.log(`Click For Robot -> ${elem.dataset.id}`)
        state.clicks.map((item, idx) => {
            console.log(`Item ${idx} = ${item}`)
            return item
        })
    }

    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/test${id}`} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <button type={"button"} onClick={handleClick} data-id={id}>More Info</button>
            </div>
        </div>
    )
}

export default Card;