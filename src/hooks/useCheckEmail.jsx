import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useAuth } from "../Context/useAuthContext";

import { useState, useEffect } from "react";

const useCheckEmail = async () => {
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkEmail = async () => {
    const { user } = useAuth();
    const dataRef = collection(db, "pixonoids-freshman-2k24");
    console.log(user.email);
    const q = query(dataRef, where("userEmail", "==", user.email));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs.length > 0);
    const userExists = querySnapshot.docs.length > 0;
    setUserExists(userExists);
    setLoading(false);
    return userExists;
  };

  checkEmail();

  return { loading, userExists, checkEmail };
};
export default useCheckEmail;
