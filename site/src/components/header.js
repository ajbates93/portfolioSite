import React from "react";
import Nav from './nav.jsx'

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header">
                <div class="header-text"></div>
                <Nav />
            </header>
        )
    }
}

export default Header;