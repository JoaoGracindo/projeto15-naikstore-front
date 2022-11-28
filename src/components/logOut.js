import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

export const LogOut = ()=>{
    const navigate = useNavigate();
const {token, setToken} = useContext(AuthContext);


useEffect(()=> {
    const promise = axios.post('https://naistore-back.onrender.com/log-out', {token})
promise
.then((res)=>{
    setToken("");
    navigate("/")
})
.catch((error)=>{
    alert("Não foi possivel sair da sua conta");;
})
},[]);
}