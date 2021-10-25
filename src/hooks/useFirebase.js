import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider  } from 'firebase/auth';
import { useState,useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error=> {
                setError(error.message)
            })
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error=> {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('object' ,user);
                setUser(user);
            }
        })
    },[])


    return {
        user,
        error,
        signInUsingGoogle,
        signInWithGithub,
        logOut
    }
}


export default useFirebase;