import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";



initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     setError(error.message)
        // })
    }
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
        // .then(result => {
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     setError(error.message)
        // })
    }
    const registerWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)  //email, password
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const userProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
            .catch(error => {
                setError(error.message)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    return {
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        registerWithEmail,
        loginWithEmail,
        userProfile,
        user,
        setUser,
        error,
        setError
    }
}
export default useFirebase;