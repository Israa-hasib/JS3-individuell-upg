import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const signUp = async (email, password) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password)
    const user = {
        uid: userCred.user.uid,
        email: userCred.user.email
    }
    return user
}

const logInDude = async (email, password) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    const user = {
        uid: userCred.user.uid,
        email: userCred.user.email
    }
    return user
}



const authService = {
    signUp, logInDude
}

export default authService