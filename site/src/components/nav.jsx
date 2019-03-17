import React from 'react';
import '../less/content.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">skills</a ></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;