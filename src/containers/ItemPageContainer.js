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
    //store.reducer.listItem=state.items.listItem
  //  console.log("state container", state.items.listItem);
    return{
        items: state.items.listItem
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        initLoad:()=>{
            dispatch(actions.getListItem())
        }
    }
}
//HOC mapDispatchToProps truyền props là initLoad, mapStateToProps truyền props : items ,ItemPageContainer nhận 2 props trên
//Chạy initLoad ở didmount => lấy dữ liệu> , return cho component con toàn bộ props 
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)