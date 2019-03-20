import React from 'react'
import '../less/content.css';

import Portfolio from './sections/portfolio';

class Content extends React.Component {
    render() {
        return (
            <main className="content">
                <Portfolio title={"Portfolio"} />
                <section>About</section>
                <section>Skills</section>
                <section>Contact</section>
            </main>
        )
    }
}

export default Content;