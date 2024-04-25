import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import firebaseConfig from '@/configs/firebase.config'

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const currentUser = auth.currentUser

export {
    db,
    auth,
    currentUser,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword
}