import React, { Component } from 'react'
import Items from '../components/Items'
import { connect } from 'react-redux'
import * as actions from '../actions/itemPageActions'

class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.initLoad(this.props.curPage)
    }
    render() {
        return (
            <div>
                {this.props.isFetching && <img src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' />}
                <Items {...this.props} >
                    
                </Items>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //store.reducer.listItem=state.items.listItem
    //  console.log("state container", state.items.listItem);
    return {
        items: state.items.listItem,
        totalPage:state.items.totalPage,
        isFetching: state.items.isFetching,
        curPage:state.items.curPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (curPage) => {
            // dispatch(actions.getListItem())
            dispatch(actions.getPageItem({curPage:1,limit:3}))

        },
        createDispatch: (data) => {
            dispatch(actions.createItemAction(data))
        },
        updateDispatch: (data) => {
            dispatch(actions.updateItemAction(data))
        },
        deleteDispatch: (data) => {
            dispatch(actions.deleteItemAction(data))
        },
        searchDispatch: (data) => {
            dispatch(actions.searchItemAction(data))
        },
        pageDispatch: (data) => {
            dispatch(actions.getPageItem(data))

        },
    }
}
//HOC mapDispatchToProps truyền props là initLoad, mapStateToProps truyền props : items ,ItemPageContainer nhận 2 props trên
//Chạy initLoad ở didmount => lấy dữ liệu> , return cho component con toàn bộ props 
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)