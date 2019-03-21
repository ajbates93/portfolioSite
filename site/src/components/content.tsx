import * as React from 'react'
import '../less/content.css';

import {Portfolio} from './sections';
import {Skills} from './sections';

export interface ContentProps {

}

class Content extends React.Component<ContentProps, {}> {
    constructor(props: ContentProps) {
        super(props);
    }
    render() {
        return (
            <main className="content">
                <Portfolio title={"Portfolio using Typescript"} />
                <section>About</section>
                <Skills />
                <section>Contact</section>
            </main>
        )
    }
}

export default Content;