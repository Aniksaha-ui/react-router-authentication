import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3>User Name : {user ? user.displayName : "Not Login"}</h3>
    </div>
  );
};

export default Home;
