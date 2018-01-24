import { combineReducers } from 'redux'
// Reducers
import data from './collection_reducer'
import schema from './schema_reducer'
export default combineReducers({ data, schema })
