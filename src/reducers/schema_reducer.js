import { GET_SCHEMA, GET_SCHEMAS } from '../actions/types'

const INITIAL_STATE = {
  collection: [],
  selected: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SCHEMAS:
      return { ...state, collection: action.payload }
    case GET_SCHEMA:
      const selected = state.collection.find(
        document => document.id === action.payload
      )
      return { ...state, selected }
    default:
      return state
  }
}
