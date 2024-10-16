// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyBtzcHu6WO-YrH5mxtM9E6WTKaRyQTRq9Q',
    authDomain: 'wittyworkbooks.firebaseapp.com',
    projectId: 'wittyworkbooks',
    storageBucket: 'wittyworkbooks.appspot.com',
    messagingSenderId: '173129752049',
    appId: '1:173129752049:web:0de715d3e89717d2a37850',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }

export default app
