import {React, useState} from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
    & > input {
        width: 300px;
        text-align: center;
    }
`

export default function Etapa2(){
    return (
    <Div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <h2>5. Qual o seu curso?</h2>
        <input 
        type="text" 
        placeholder="Digite aqui o nome do seu curso de graduação."
        />
        <br/>
        <h2>6. Qual a instituição de Ensino?</h2>
        <input 
        type="text" 
        placeholder="Digite aqui o nome da instituição."
        />
    </Div>
    );
  }