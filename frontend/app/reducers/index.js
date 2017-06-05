import { REQUEST_BUSINESS_DETAIL, RECEIVE_BUSINESS_DETAIL } from '../actions/'

function businessDetail(state = {
  isFetching: false,
  item : {}
}, action) {
  switch (action.type) {
    case REQUEST_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: true
    })
    case RECEIVE_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.businessDetail,
        lastUpdated: action.receivedAt
    })
    default:
      return state
  }
}

export default businessDetail;
