import React,{useState} from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
const Div = styled.div`
margin-top: 60px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

function OnClick() {
  
}

function App() {
  return (
    <Div>
      <button
      >CLIQUE PARA PRÓXIMA ETAPA</button>
    </Div>
  );
}

export default App;