import { combineReducers } from 'redux'
import {
  HAS_BUSINESS_SELECTION, REQUEST_BUSINESS_DETAIL, RECEIVE_BUSINESS_DETAIL
} from '../actions/'


function hasBusinessSelection(state = 'business', action) {
  switch (action.type) {
    case HAS_BUSINESS_SELECTION:
      return action.business
    default:
      return state
  }
}

function businessDetail(state = {
  isFetching: false,
  item : {},
}, action) {
  switch (action.type) {
    case REQUEST_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: true;
    })
    case RECEIVE_BUSINESS_DETAIL:
      return Object.assign({}, state, {
        isFetching: false;
        items: action.businessDetail,
        lastUpdated: action.receivedAt
    })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hasBusinessSelection,
  businessDetail
})

export default rootReducer;
