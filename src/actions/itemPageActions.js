import * as type from '../constant'

export function getListItem(payload) {
    return {
        type: type.GET_ITEM_REQUEST,
        payload
    }
}
export function getPageItem(payload) {
    return {
        type: type.GET_PAGE_REQUEST,
        payload
    }
}

export function createItemAction(payload) {
    return {
        type: type.CREATE_ITEM_REQUEST,
        payload
    }
}

export function updateItemAction(payload) {
    return {
        type: type.UPDATE_ITEM_REQUEST,
        payload
    }
}

export function deleteItemAction(payload) {
    return {
        type: type.DELETE_ITEM_REQUEST,
        payload
    }
}
export function searchItemAction(payload) {
    return {
        type: type.SEARCH_ITEM_REQUEST,
        payload
    }
}