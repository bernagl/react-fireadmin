import { GET_COLLECTION, GET_DOCUMENT } from '../actions/types'

const INITIAL_STATE = {
  collection: [],
  document: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_COLLECTION:
      return { ...state, collection: action.payload }
    case GET_DOCUMENT:
      return { ...state, document: action.payload }
    default:
      return state
  }
}
