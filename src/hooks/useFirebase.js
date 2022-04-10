import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  useEffect(() => {}, []);

  //google login
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  //for conditional rendering we have to update the state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //sign out
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   return [user, setUser];
  return { user, signInWithGoogle, handleLogout };
};

export default useFirebase;
