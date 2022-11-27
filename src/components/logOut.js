import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

export const LogOut = ()=>{
    const navigate = useNavigate();
const {token, setToken} = useContext(AuthContext);


useEffect(()=> {
    const promise = axios.post('mongodb+srv://mymovieserver:6Slrau3UKuou1jIT@cluster0.1lcgweb.mongodb.net/?retryWrites=true&w=majority/log-out', {token})
promise
.then(()=>{
    setToken("");
    navigate("/")
})
.catch( ()=>{
    alert("Não foi possivel sair da sua conta");
    navigate("/");
})
},[navigate, setToken, token]);
}