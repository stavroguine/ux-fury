import React from "react"
import branche from "../images/branche.png";
import leaf from "../images/leaf.svg";
import leaf_white from "../images/leaf_white.svg";


function Context(props) {
    return (
            <div className="context">
                <img src={branche} className="branch" />
                <img src={leaf_white} className="leaf leaf__left" />
                <div className="container h-100">
                    <div className="row">
                        <div className="col-sm-12  pl-0">
                            <div className="peneloppe__intro--title">
                                <h2>Le contexte</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 pl-0">
                            <h3>Présentation</h3>
                            <p>
                                {props.presentation}
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4  pl-4">
                            <h3>Le problème</h3>
                            <p>
                                {props.problem}
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4  pl-4">
                            <h3>La résolution</h3>
                            <p>
                                {props.resolution}
                            </p>
                        </div>
                    </div>
                    <img src={leaf} className="leaf leaf__right" />
                </div>
            </div>
    );
}

export default Context;