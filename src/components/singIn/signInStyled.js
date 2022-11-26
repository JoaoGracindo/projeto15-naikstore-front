import styled from "styled-components";

export const Form = styled.form`
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

export const Container = styled.div`
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

export const Input = styled.input`
  width: 300px;
  height: 44px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Button = styled.button`
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