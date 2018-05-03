import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IndexPage } from "./page";
import { UserLoginPage } from "./page/user/login";
import { MatchIndexPage } from "./page/match";

export class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/user/login'} component={UserLoginPage}/>
                    <Route exact path={'/match'} component={MatchIndexPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}