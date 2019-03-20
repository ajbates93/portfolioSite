import * as React from 'react';
import '../less/content.css';

export interface NavProps {

}

class Nav extends React.Component<NavProps, {}> {
    constructor(props: NavProps) {
        super(props);
    }
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