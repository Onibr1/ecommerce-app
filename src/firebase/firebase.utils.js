import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    
        apiKey: "AIzaSyAj11vWGMDMXuGlU99zpdM1ajMSN6m3I5U",
        authDomain: "crwn-db-cfccc.firebaseapp.com",
        databaseURL: "https://crwn-db-cfccc.firebaseio.com",
        projectId: "crwn-db-cfccc",
        storageBucket: "crwn-db-cfccc.appspot.com",
        messagingSenderId: "672121064548",
        appId: "1:672121064548:web:679740a5a9578d1c2a6371",
        measurementId: "G-XYFM2KTC6E"
      }
firebase.initializeApp(config);
export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }catch(error){
            console.log('error creating Users', error.message)
      }
      
    }
    return userRef;
} 

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

