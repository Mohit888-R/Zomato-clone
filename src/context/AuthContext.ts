import {createContext, useEffect,useState,useContext } from 'react'

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "../components/Account/firebase";

const userAuthContext = createContext(false);


export default function UserAuthContextProvider({children}){
    const [user,setUser] = useState({});

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
        console.log("Auth",currentUser);
                setUser(currentUser);
        });

        return ()=>{
            unsubscribe();
        }
    },[]);
    return (
        <userAuthContext.Provider value={{user,logIn,signUp,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(userAuthContext);
}