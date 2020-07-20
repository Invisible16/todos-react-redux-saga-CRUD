import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as page from './pages'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={page.HomePage} />
                <Route path="/items" component={page.ItemPage} />
            </Switch>
        </Router>
    )
}
