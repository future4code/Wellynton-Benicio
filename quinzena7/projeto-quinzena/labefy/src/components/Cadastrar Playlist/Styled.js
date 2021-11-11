import styled from 'styled-components';

export const Div = styled.div `
    width: 75vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 3%;
`;

export const Form = styled.form `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        label{
            font-size: 4vw;
        }
`;

export const Input = styled.input `
    width: 30%;
    border-radius: 100px;
    padding: 0.5%;
    margin-top: 1%;
    text-align: center;
`;

export const Button = styled.button`
    width: 17%;
    border-radius: 100px;
    padding: 0.5%;
    margin-top: 1.5%;
        :hover{
            background-color: #262626;
            color: white;
        }    
`;