import React from 'react'
import '../less/content.css';

class Content extends React.Component {
    render() {
        return (
            <main className="content">
                <section>Portfolio</section>
                <section>About</section>
                <section>Skills</section>
                <section>Contact</section>
            </main>
        )
    }
}

export default Content;