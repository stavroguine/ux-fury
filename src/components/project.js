import React from 'react';
import Image from "./image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Project(props) {
    return (
        <div className="col-sm-12 col-md-6 pl-0">
            <AniLink cover direction="left" duration={2} to={props.link}>
                <div className="projects projects--item border">
                    <div className="black-opacity">
                    </div>
                    <span>{props.text}</span>
                    <Image alt={props.alt} filename={props.filename} />
                </div>
            </AniLink>
        </div>
    );
}

export default Project;