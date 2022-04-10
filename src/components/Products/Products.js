import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3>Hello {user ? user.displayName : "! Please login"} </h3>
    </div>
  );
};

export default Products;
