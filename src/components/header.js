import { Link } from "gatsby"
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
                        margin: `0 20%`,
                        maxWidth: 960,
                        padding: `1rem`,
                    }}
                >
                    <AniLink paintDrip color="yellow"  to='/'  >
                        <img src={logo}  />
                    </AniLink>
                </div>
            </header>
        );
    }
}

export default Header;
