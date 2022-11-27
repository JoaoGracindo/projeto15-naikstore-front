import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Input, Form, Container, Button } from "../singIn/signInStyled";



const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();


    function handleForm(e){

        if(password === repeatPassword){
            const userRegister = {
                name,
                email,
                password,
                card:[],
            }
    
            const promise = axios.post('http://localhost:5000/sign-up', userRegister)
            promise.then( (res) => {
                setToken(res.data.token);
                navigate("/sign-in")
            }
                )
                .catch(alert("Não foi possivel realizar o cadastro"))
        } else{
            alert("As senhas não são iguais")
        }
        
        e.preventDefault();
    }

    return (
        <Container>
                <h1>NAIK</h1>
                <p>SUA CONTA PARA TUDO DA NAIK</p>
            <Form onSubmit={handleForm} >

                <Input placeholder="Nome" type="text" value={name} onChange={(e) =>  setName(e.target.value)}></Input>
                <Input placeholder="Endereço de e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Input placeholder="Senha"  type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Input placeholder="Confirme sua senha" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></Input>
                <Button type="submit">Cadastra-se</Button>

                <Link className="link" to="/sign-in">
                <p>Já tem uma conta? Faça login </p>
                </Link>
            </Form>
        </Container>
    )
}

export default SignUp;