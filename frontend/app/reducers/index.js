import { BUSINESS_DETAIL_REQUEST, BUSINESS_DETAIL_SUCCESS, BUSINESS_DETAIL_FAILURE, RESET_ERROR} from '../actions/'

function businessDetail(state = {
  isFetching: false,
  selectedBusiness : {},
  error: null
}, action) {
  switch (action.type) {
    case BUSINESS_DETAIL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
    })
    case BUSINESS_DETAIL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
    })
    case BUSINESS_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        selectedBusiness: action.businessDetail
    })
    case RESET_ERROR:
      return Object.assign({}, state, {
        error: null
    })
    default:
      return state
  }
}

export default businessDetail;
