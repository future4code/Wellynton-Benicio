import {React, useState} from "react";
import styled from "styled-components";

const Div = styled.div`
text-align: center;
`

export default function Etapa1(){
    return (
    <Div>
        <h1>O formulário acabou!</h1>
        <h3>Muito obrigado por participar! Entraremos em contato.</h3>
    </Div>
    );
  }