import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC92MpvKFfRRa21s4RwqRzwYEWa-6udU3k',
  authDomain: 'lunch-app-df211.firebaseapp.com',
  databaseURL: 'https://lunch-app-df211.firebaseio.com',
  projectId: 'lunch-app-df211',
  storageBucket: 'lunch-app-df211.appspot.com',
  messagingSenderId: '663789380338'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
