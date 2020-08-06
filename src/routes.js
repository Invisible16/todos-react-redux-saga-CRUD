import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux'
import * as page from './pages'

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={page.HomePage} />
                <Route path="/items" component={page.ItemPage} />
                <Route path={`/items/?page=${props.curPage}`} component={page.ItemPage} />
            </Switch>
        </Router>
    )
}
const mapStateToProps = (state) => {
    //store.reducer.listItem=state.items.listItem
    //  console.log("state container", state.items.listItem);
    return {
        curPage:state.items.curPage,
    }
}
export default connect(mapStateToProps)(Routes)