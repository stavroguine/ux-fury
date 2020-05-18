import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react';


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
                    document.getElementById("navbar").style.top = "-5.0rem";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    render () {
        return (
            <header id="navbar"
                style={{
                    background: `rebeccapurple`,
                    marginBottom: `1.45rem`,
                }}
            >

                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                    }}
                >
                    <h1 style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: `white`,
                                textDecoration: `none`,
                            }}
                        >

                        </Link>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Header;
