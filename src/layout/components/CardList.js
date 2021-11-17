import React from "react";
import Card from "./Card";
import LoadingItems from "./LoadingIntems";

const CardList = ({robots}) => {

    const cardComponent = robots.map((robot, idx) =>{
        return <Card key={idx} name={robot.name} id={robot.id} email={robot.email}/>
    })

    if(!robots.length){
        return (
            <LoadingItems />
        )
    }else{
       return (
           <>
               {cardComponent}
           </>
        )
    }
}

export default CardList;