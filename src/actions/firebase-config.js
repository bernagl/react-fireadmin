import * as firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyABO7lJxdLXpn3Fdgs9iHb_UNrYnKn711c',
  authDomain: 'inventario-65d73.firebaseapp.com',
  databaseURL: 'https://inventario-65d73.firebaseio.com',
  projectId: 'inventario-65d73',
  storageBucket: 'inventario-65d73.appspot.com',
  messagingSenderId: '1040987382886'
}
firebase.initializeApp(config)

export default firebase.firestore()
