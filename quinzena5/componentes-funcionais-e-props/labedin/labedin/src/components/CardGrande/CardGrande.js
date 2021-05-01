import React from 'react';
import styled from 'styled-components'

 const HeaderBigCard = styled.header `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
img {
    width: 60px;
    margin-right: 10px;
    border-radius: 50%;
}`;

const H4BigCard = styled.h4 `
    margin-bottom: 15px;
`;

const DivBigCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;


function CardGrande(props) {
    return (
        <HeaderBigCard >
            <img src={ props.imagem } />
            <DivBigCard>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </DivBigCard>
        </HeaderBigCard>
    )
}

export default CardGrande;