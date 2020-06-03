import React, { Component } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../images/logo.png";

class Footer extends Component {



    render() {
        function topFunction() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
        return(

                <div className="footer">
                        <div className="container">
                            <div className="row">
                            <div className="col-sm-6 col-md-1 pl-0">
                                <AniLink paintDrip hex="#E9B642"  to='/'  >
                                    <img src={logo}  />
                                </AniLink>
                            </div>
                                <div className="col-sm-6 col-md-11 ">
                                        <div  className="float-right" onClick={topFunction} >
                                            <div className="circle">
                                                <div className="arrow-up icon "></div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>

        );
    }

}


export default Footer;