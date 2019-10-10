import { combineReducers } from 'redux'
import clientsReducer from './clientsReducer'
import managersReducer from './managersReducer'

export default combineReducers({
  clients: clientsReducer,
  // @ts-ignore
  managers: managersReducer
})
