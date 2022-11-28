import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Input, Form, Container, Button } from "./signInStyled";



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();


    function handleForm(e){
        const userLogin = {
            email,
            password,
        }

        const promise = axios.post('http://localhost:5000/sign-in', userLogin)
        promise.then( (res) => {
            setToken(res.data.token);
            navigate("/")
        }
            )
        .catch(alert("E-mail e/ou senha errados "))
        e.preventDefault();
    }

    return (
        <Container>
                <h1>NAIK</h1>
                <p>SUA CONTA PARA TUDO DA NAIK</p>
            <Form onSubmit={handleForm} >
                <Input placeholder="Endereço de e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>

                <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>

                <Button type="submit">Entrar</Button>

                <Link className="link" to="/sign-up">
                <p>Não tem uma conta? Cadastre-se </p>
                </Link>
            </Form>
        </Container>
    )
}

export default SignIn;