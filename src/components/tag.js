import React from "react"

const Tag = props  => (
    <span className="tag"
         style={{
             backgroundColor: `#2F7B27`,
             border: `5px solid #2F7B27`,
             color: `white`,
             fontSize: `20px`,
             marginRight: `5%`,
         }}>
        {props.children}
    </span>
);


export default Tag