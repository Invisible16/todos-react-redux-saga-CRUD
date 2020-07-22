import * as type from '../constant'

export function getListItem(payload) {
    return {
        type: type.GET_ITEM_REQUEST,
        payload
    }
}

export function createItemAction(payload) {
    return {
        type: type.CREATE_ITEM_REQUEST,
        payload
    }
}