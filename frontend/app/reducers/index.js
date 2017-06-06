import { REQUEST_BUSINESS_DETAIL, RECEIVE_BUSINESS_DETAIL } from '../actions/'

function businessDetail(state = {
  isFetching: false,
  selectedBusiness : {}
}, action) {
  switch (action.type) {
    case REQUEST_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: true
    })
    case RECEIVE_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        selectedBusiness: action.businessDetail
    })
    default:
      return state
  }
}

export default businessDetail;
