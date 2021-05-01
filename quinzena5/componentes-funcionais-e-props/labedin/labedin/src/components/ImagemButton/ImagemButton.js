import React from 'react';
import styled from 'styled-components'

const HeaderImgButtom = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
img {
    width: 30px;
    margin-right: 10px;
}`;

function ImagemButton(props) {
    return (
        <HeaderImgButtom className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </HeaderImgButtom>

    )
}

export default ImagemButton;