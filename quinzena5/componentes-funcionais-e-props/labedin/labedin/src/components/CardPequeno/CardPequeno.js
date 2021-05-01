import React from 'react';
import styled from 'styled-components'

const HeaderSmallCard = styled.header `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`;

const DivSmallCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

const Imagem = styled.img `
    width: 0px;
    margin-right: 10px;
    border-radius: 60%;
`;

const TextoSmallCard = styled.h4`
    margin-bottom: 15px;
`;

function CardPequeno(props) {
    return (
        <HeaderSmallCard >
            <img src={ props.imagem } />
            <DivSmallCard>
                <h4>{ props.nome }</h4>
            </DivSmallCard>
        </HeaderSmallCard>
    )
}

export default CardPequeno;