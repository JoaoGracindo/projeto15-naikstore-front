import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import styled from "styled-components";



function Checkout() {
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();


    function handleForm(e){
        e.preventDefault();

            const body = {
                number,
                date,
                cvv
            }
            console.log(body)
    
            const promise = axios.post(
                    'http://localhost:5000/checkout',
                    body,
                    {headers: { authorization: `Bearer ${token}`}}
                    
                    );

            promise.then((res) => {
                alert("Compra realizada com sucesso! voce sera redirecionado a pagina inicial")
                
                navigate("/")
                
            }
                )
                .catch(err => console.log(err))

        
    }

    return (
        <Container>
                <p>Preencha com as informações de pagamento</p>
            <Form onSubmit={handleForm} >

                <Input placeholder="Numero do cartão" type="text" value={number} onChange={(e) =>  setNumber(e.target.value)}></Input>
                <Input placeholder="Data de vencimento do cartão" type="text" value={date} onChange={(e) => setDate(e.target.value)}></Input>
                <Input placeholder="Senha"  type="text" value={cvv} onChange={(e) => setCvv(e.target.value)}></Input>
                <Button type="submit">Confirmar compra</Button>

                <Link className="link" to="/home">
                <p>Cancelar</p>
                </Link>
            </Form>
        </Container>
    )
}

export default Checkout;



 const Form = styled.form`
  display: flex;
  width: 400px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  >p {
    margin-top: 20px;
  }
`;

 const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1 {
    font-size: 30px;
    font-weight: bold;
    color: #111111;
    margin-bottom: 16px;
    margin-top: 40px;
    }

    >p {
    font-size: 20px;
    font-weight: bold;
    color: #111111;
    margin-bottom: 12px;
    color: inherit;
    }
    .link{
        color:black;
        }
    
`;

 const Input = styled.input`
  width: 300px;
  height: 44px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

 const Button = styled.button`
  width: 300px;
  border: none;
  border-radius: 15px;
  background-color: #111111;
  padding: 10px;
  font-size: 20px;
  margin-top: 12px;
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: pointer;
`;

