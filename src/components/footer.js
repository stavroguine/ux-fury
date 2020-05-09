import React, { Component } from 'react';
import { Link } from "gatsby";

class Footer extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="footer">
                        <div className="container">
                            <div className="row">
                               <ul>
                                   <li><Link to='/'>GM</Link></li>
                                   <li>Contact</li>
                                   <li>Plan du site</li>
                                   <li>Mention légales</li>
                               </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;