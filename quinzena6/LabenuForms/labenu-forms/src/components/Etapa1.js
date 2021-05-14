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
    }& > select {
        width: 170px;
    }
`

export default function Etapa1(){
    return (
    <Div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <h2>1. Qual o seu nome?</h2>
        <input 
        type="text" 
        placeholder="Digite seu nome"
        />
        <br/>
        <h2>2. Qual sua idade?</h2>
        <input 
        type="text" 
        placeholder="Digite sua idade"
        />
        <br/>
        <h2>3. Qual seu e-mail?</h2>
        <input 
        type="text" 
        placeholder="Digite seu e-mail"
        />
        <br/>
        <h2>4. Qual sua escolaridade?</h2>
        <select>
            <option value="EnsinoFundamental">Ensino Fundamental</option>
            <option value="EnsinoMedio">Ensino Médio</option>
            <option value="EnsinoSuperiorIncompleto">Superior Incompleto</option>
            <option value="EnsinoSuperiorCompleto">Superior Completo</option>
        </select>
    </Div>
    );
  }
  