import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch} = useAuthContext();
    const navigate = useNavigate();

    const login = (email, password) => {
        setError(null);

        signInWithEmailAndPassword(auth, email, password)
            .then((res)=> {
                dispatch({type: 'LOGIN', payload: res.user})
                navigate('/');
            })
            .catch((err)=> {
                setError(err.message)
            })
    }

    return { error, login}
}