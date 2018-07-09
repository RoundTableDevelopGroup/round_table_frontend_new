import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IndexPage } from "./page";

// 主路由
export class MainRouter extends React.Component {

    render() {

        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                </Switch>
            </HashRouter>
        );

    }

}