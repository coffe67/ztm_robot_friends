import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
    const cardComponent = robots.map((robot, idx) =>{
        return <Card key={idx} name={robot.name} id={robot.id} email={robot.email}/>
    })
    return (
       <>
           {cardComponent}
       </>
    )
}

export default CardList;