import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IndexPage } from "./page";
import { UserLoginPage } from "./page/user/login";
import { MatchIndexPage } from "./page/match";
import { ChannelIndexPage } from "./page/channel";
import { ChannelPerPage } from "./page/channel/per";

export class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>

                    <Route exact path={'/user/login'} component={UserLoginPage}/>

                    <Route exact path={'/match'} component={MatchIndexPage}/>

                    <Route exact path={'/channel'} component={ChannelIndexPage}/>

                    <Route exact path={'/channel/:channelId'} component={ChannelPerPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}