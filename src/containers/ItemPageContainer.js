import React, { Component } from 'react'
import Items from '../components/Items'
import {connect} from 'react-redux'
import * as actions from '../actions/itemPageActions'

class ItemPageContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
              <Items {...this.props}/>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log("state container", state.items.listItem);
    return{
        items:state.items.listItem
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        initLoad:()=>{
            dispatch(actions.getListItem())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)