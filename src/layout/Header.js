import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <div>
                        <img src={logo} alt="logo" className="App-logo"/>
                    </div>
                    <nav>
                        <div>Nav 1</div>
                        <div>Nav 2</div>
                        <div>Nav 3</div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;