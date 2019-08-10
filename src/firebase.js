import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBnD1RdeD5iNw_y3cahx8ajMebkDyT_dH8",
    authDomain: "alo-talabati.firebaseapp.com",
    databaseURL: "https://alo-talabati.firebaseio.com",
    projectId: "alo-talabati",
    storageBucket: "alo-talabati.appspot.com",
    messagingSenderId: "753646471377",
    appId: "1:753646471377:web:a40c87b191bbb110"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();