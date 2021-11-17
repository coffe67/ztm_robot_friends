import React from "react";

const Scroll = (props) =>{
    console.log(props)
    return (
        <div style={{overflowY: 'scroll', height:'320px'}}>
            {props.children}
        </div>
    )
}

export default Scroll