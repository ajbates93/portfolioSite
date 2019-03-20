import * as React from "react";
import Nav from './nav';

export interface HeaderProps {

}

class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
    }
    render() {
        return (
            <header id="header" className="header">
                <div className="header-text"></div>
                <Nav />
            </header>
        )
    }
}

export default Header;