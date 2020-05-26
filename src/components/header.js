
import PropTypes from "prop-types"
import React, { Component } from 'react';
import logo from '../images/logo.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends Component {
    constructor (props) {
        super(props);
        if (typeof window !== 'undefined') {
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                const maxScroll = document.body.clientHeight - window.innerHeight;
                let currentScrollPos = window.pageYOffset;
                if (
                    (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll)
                    || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
                    || (prevScrollpos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-10.0rem";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    render () {
        return (
            <header id="navbar"
                style={{
                    background: `white`,
                    marginBottom: `1.0rem`,
                    opacity: 0.9
                }}
            >
                <div
                    style={{
                        padding: `1rem`,
                    }}
                    className="container"
                >
                    <div className="row">
                        <div className="col-sm-1">
                            <AniLink paintDrip color="yellow"  to='/'  >
                                <img src={logo}  />
                            </AniLink>
                        </div>
                        <div className="col-sm-8 mt-2">
                            <ul className="">
                                <li><AniLink paintDrip color="yellow"  to='/career'  >Mon parcours</AniLink></li>
                                <li><AniLink cover direction="bottom" duration={2} to='/projects'>Mes projets</AniLink></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 mt-2">
                            <div className="header__social">
                                <a target="_blank" href="mailto:gaelle.j.molina@gmail.com"><i className="icon-mail"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/ga%C3%ABlle-molina-63a04b129"><i className="icon-linkedin-squared"></i></a>
                                <a target="_blank" href="https://www.instagram.com/gailartdesign/"><i className="icon-instagram"></i></a>
                                <a target="_blank" href="https://www.youtube.com/user/GailOnTheMars"><i className="icon-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
