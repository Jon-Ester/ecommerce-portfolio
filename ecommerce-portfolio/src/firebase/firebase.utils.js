import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAAz0beyleoQ6vDABW4lJRY5pDz-2DVwT4",
  authDomain: "ecommerce-portfolio-877b0.firebaseapp.com",
  projectId: "ecommerce-portfolio-877b0",
  storageBucket: "ecommerce-portfolio-877b0.appspot.com",
  messagingSenderId: "696466595210",
  appId: "1:696466595210:web:2bfc415f541123a8a3bc73",
  measurementId: "G-MY8E8F4JJZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;