import React from "react"
import blue from "../images/Leaf blue shadow.png";

const Recap = props  => (

    <div className="recap">
        <div className="container h-100 ">
            <div className="row h-100 align-items-center">
                {props.children}
            </div>
        </div>
    </div>
);


export default Recap
