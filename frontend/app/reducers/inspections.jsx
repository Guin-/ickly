import { INSPECTIONS_REQUEST, INSPECTIONS_SUCCESS, INSPECTIONS_FAILURE, RESET_ERROR } from '../actions/'

function inspectionsList(state = {
  inspections: [],
  error: null
}, action) {
  switch (action.type) {
    case INSPECTIONS_REQUEST:
      return Object.assign({}, state, {
        error: null
    })
    case INSPECTIONS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
    })
    case INSPECTIONS_SUCCESS:
      return Object.assign({}, state, {
        inspections: action.inspectionsList
    })
    case RESET_ERROR:
      return Object.assign({}, state, {
        error: null
    })
    default:
      return state
  }
}

export default inspectionsList;
