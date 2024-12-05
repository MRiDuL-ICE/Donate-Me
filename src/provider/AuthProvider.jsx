import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("");
  console.log(user)

  const provider = new GoogleAuthProvider();

  const createNewUser = (email, password, name, photourl) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, name, photourl);
  };

  const userProfile = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    })
  }

  const updateUserProfile = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    })
  }

  const passwordReset = (email) => {
  return sendPasswordResetEmail(auth, email)
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    loginUser,
    googleSignin,
    logOut,
    GoogleAuthProvider,
    loading,
    userProfile,
    email,
    setEmail,
    passwordReset,
    updateUserProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  },[])

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
