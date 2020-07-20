import * as type from '../constant'

export function getListItem(payload){
return {
    type:type.GET_ITEM_REQUEST,
    payload
}
}