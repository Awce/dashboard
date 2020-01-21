import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyB9U32T68u60oGnRC6FGvhMTbs8T-1iWSI",
  authDomain: "nothocho-650fb.firebaseapp.com",
  databaseURL: "https://nothocho-650fb.firebaseio.com",
  projectId: "nothocho-650fb",
  storageBucket: "nothocho-650fb.appspot.com",
  messagingSenderId: "436086371395",
  appId: "1:436086371395:web:ad8cf178dc601703"
};

firebase.initializeApp(firebaseConfig);

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(snap => {
      localStorage.setItem("user", JSON.stringify(snap.user));
      return snap.user;
    });
}

export function signOutGoogle() {
  localStorage.removeItem("user");
  firebase.auth().signOut();
}
