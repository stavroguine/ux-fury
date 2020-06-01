import React from "react"
import leaf from "../images/leaf.svg";

const LeafCascade = props  => (
    <div className="leaf-cascade">
        <img src={leaf} className="leaf leaf__left" />
        <img src={leaf} className="leaf leaf__left" />
        <img src={leaf} className="leaf leaf__right" />
        <img src={leaf} className="leaf leaf__right" />
    </div>
);


export default LeafCascade