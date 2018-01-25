import db from './firebase-config'
import { GET_COLLECTION, GET_DOCUMENT, GET_SCHEMA, GET_SCHEMAS } from './types'
import schemas from '../schemas'

export const createDocument = (document, collection) => async dispatch => {
  const data = await db.collection(collection).add(document)
  return data.id
}

export const deleteDocument = (collection, id) => async dispatch => {
  console.log(id)
  console.log(collection)
  const data = await db
    .collection(collection)
    .doc(id)
    .delete()
  return data
}

export const updateDocument = (id, document, collection) => async dispatch => {
  const data = await db
    .collection(collection)
    .doc(id)
    .set(document)
  return data
}

export const getCollection = schema => async dispatch => {
  let payload = []
  const data = await db.collection(schema).get()
  data.forEach(doc => payload.push({ id: doc.id, ...doc.data() }))
  dispatch({ type: GET_COLLECTION, payload })
}

export const getDocument = params => async dispatch => {
  let payload = {}
  const data = await db
    .collection(params.schema)
    .doc(params.id)
    .get()
  payload = data.data()
  dispatch({ type: GET_DOCUMENT, payload })
}

// export const getSchemas = () => async dispatch => {
//   let payload = []
//   const data = await db.collection('schemas').get()
//   data.forEach(doc => {
//     db
//       .collection(`schemas`)
//       .doc(`${doc.id}`)
//       .collection('fields')
//       .get()
//       .then(docu => {
//         docu.forEach(element =>
//           payload.push({ ...doc.data(), fields: { ...element.data() } })
//         )
//       })
//     // payload.push({ id: doc.id, ...doc.data() })
//   })
//     console.log(payload)
//     dispatch({ type: GET_SCHEMAS, payload })
// }

export const getSchemas = () => dispatch => {
  dispatch({ type: GET_SCHEMAS, payload: schemas })
}

export const getSchema = schema => dispatch => {
  dispatch({ type: GET_SCHEMA, payload: schema })
}
