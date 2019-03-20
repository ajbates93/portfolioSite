import * as React from 'react';
import '../less/content.css';

export interface FooterProps {

}

class Footer extends React.Component<FooterProps, {}> {
    constructor(props: FooterProps) {
        super(props);
    }
    render() {
        return (
            <footer>
                footer
            </footer>
        )
    }
}

export default Footer;