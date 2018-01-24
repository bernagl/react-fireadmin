import db from './firebase'

export const getData = () => async dispatch => {
  const data = await db.collection('usuarios').get()
  console.log(data.data())
}
