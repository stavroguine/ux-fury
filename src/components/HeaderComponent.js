import React, { Component } from 'react';
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                    <Route path="/home" component={Home} />

                </Switch>
            </React.Fragment>
        );
    }
}

export default Header;