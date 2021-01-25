import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXuskwO6pWqt7pkyL938WipkYOLhInOK0",
  authDomain: "crwn-db-99466.firebaseapp.com",
  projectId: "crwn-db-99466",
  storageBucket: "crwn-db-99466.appspot.com",
  messagingSenderId: "636824062642",
  appId: "1:636824062642:web:620cbe0c9837c1523a97ab",
  measurementId: "G-HKF5B2Z7M1"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;