import * as React from 'react';
import '../../less/content.css';

export interface PortfolioProps {
    title: string;
}

class Portfolio extends React.Component<PortfolioProps, {}> {
    constructor(props: PortfolioProps) {
        super(props);
    }
    
    render() {
        return (
            <section id="portfolio">
                <h1>{this.props.title}</h1>
            </section>
        )
    }
}

export default Portfolio;