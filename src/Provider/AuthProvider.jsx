import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider()


    const createNewUser = (email, passward) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passward)

    }
    const loginUser = (email, passward) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passward)

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return  signInWithPopup(auth,googleProvider) 
    }
    const manegeProfile = (name,image) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    } 


 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])
    

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        setLoading,
        googleSignIn,
        manegeProfile 
   

    }


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;