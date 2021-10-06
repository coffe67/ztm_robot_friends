import React from "react";

const SearchCardBar = ({searchfield, searchChange}) => {
    return (
        <>
            <div>
                <input type="search" placeholder={'Search Phrase'} onChange={searchChange}/>
            </div>
        </>
    )
}

export default SearchCardBar;