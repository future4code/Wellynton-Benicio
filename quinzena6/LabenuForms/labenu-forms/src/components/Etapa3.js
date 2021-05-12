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
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <h2>7. Por que não terminou um curso de graduação?</h2>
        <input 
        type="text" 
        placeholder="Digite seu nome"
        />
        <br/>
        <h2>8. VOcê fez algum curso complementar?</h2>
        <select>
            <option value="Nenhum">Nenhum</option>
            <option value="RealizeiPeloMenosUm">Sim, realizei pelo menos 1</option>
            <option value="RealizeiMaisDeUm">Sim, realizei mais de 1 curso</option>
        </select>
    </Div>
    );
  }
  