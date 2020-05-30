import React from "react"
import groupe_402 from "../images/Groupe_402.png";

const Background = props  => (
    <div className="recap">
        <div className="container h-100 ">
            <div className="row h-100 align-items-center">
                {props.children}
                <img src={groupe_402} className="leaf leaf__right" />
            </div>
        </div>
    </div>
);


export default Background
