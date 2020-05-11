import React from "react"

const Background = props  => (
    <div className="container h-100 ">
        <div className="row h-100 align-items-center">
            {props.children}
        </div>
    </div>
);


export default Background
