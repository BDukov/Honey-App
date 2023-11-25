import { useState} from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useRegister = () =>{
    const [error, setError] = useState(null);
    const { dispatch} = useAuthContext();
    const navigate = useNavigate();


    const register = (email, password) => {
        setError(null);

        createUserWithEmailAndPassword(auth, email, password)
            .then((res)=> {
                dispatch({type: 'LOGIN', payload: res.user})
                navigate('/');
            })
            .catch((err)=> {
                setError(err.message)
            })
    }

    return { error, register}
}