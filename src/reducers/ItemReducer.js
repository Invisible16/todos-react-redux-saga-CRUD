import * as types from '../constant'
const DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
            case types.GET_PAGE_REQUEST:
                return {
                    ...state,
                    isFetching: true
                }
            case types.GET_PAGE_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    dataFetched: true,
                    error: false,
                    errorMessage: null,
                    listItem: action.payload.data,
                    totalPage:action.payload.totalPage
                }
            case types.GET_PAGE_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                }
        case types.CREATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case types.CREATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        case types.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case types.DELETE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload.data,
                totalPage:action.payload.totalPage
            }
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state
    }
}