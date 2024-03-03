
import axios from "axios";
import { useNavigate } from "react-router";


export const loginCall = async (userCredentital , dispatch) => {

    dispatch({ type: "LOGIN_START"});

    try{
        const res = await axios.post("/auth/login", userCredentital);
        dispatch({ type: "LOGIN_SUCCESS", payload : res.data });
    }catch(err){
        dispatch({ type: "LOGIN_FAILURE", payload : err });
    }
};  