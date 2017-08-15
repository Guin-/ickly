import { combineReducers } from 'redux'
import businessDetail from './businessDetail'
import inspectionsList from './inspections'

export default combineReducers({
  business: businessDetail,
  inspections: inspectionsList
})

