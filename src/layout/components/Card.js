import React, {useState} from "react";
import {robots} from "../../demo_data/robots";

const Card = ({key, name, id, email}) => {

    const [state, setState] = useState({
        clicks: []
    })

    const handleClick = (event) =>{
        const elem = event.currentTarget;
        console.log(`Click For Robot -> ${elem.dataset.id}`)
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