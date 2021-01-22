import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import { types } from "../../types/types"

export const starLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        setTimeout( () => {
            dispatch( login(email,password) )
        }, 1255 )
    }
}

export const starGoogleLogin = ( email, password ) => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ( {user} ) => {
                console.log(user)
                dispatch( login(user.uid,user.displayName) )
            })
        // dispatch( login(email,password) )
        
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})