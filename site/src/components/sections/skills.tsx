import * as React from "react";

interface SkillsProps {

}

export class Skills extends React.Component<SkillsProps, {}> {
    constructor(props: SkillsProps) {
        super(props);
    }
    render() {
        return (
            <section id="skills">
                <div className="skills-container">
                    <div className="skill-item">
                        <div className="skill-title">HTML/CSS</div>
                        <div className="skill-text">lorem ipsum diof oeao fepwefj dk</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-title">Javascript</div>
                        <div className="skill-text">lorem ipsum diof oeao fepwefj dk</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-title">C#/ASP.NET</div>
                        <div className="skill-text">lorem ipsum diof oeao fepwefj dk</div>
                    </div>
                </div>
            </section>
        )
    }
}