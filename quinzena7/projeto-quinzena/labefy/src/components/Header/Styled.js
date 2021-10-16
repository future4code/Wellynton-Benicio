import styled from 'styled-components';

export const Div = styled.header `
    background-color: #262626;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
        h1{
            margin-left: 2vw;
        }

`;

export const DivButtons = styled.header `
    display: flex;
    width: 55%;
    justify-content: space-between;
    margin-right: 2vw;
        button{
            width: 12vw;
            height: 5vh;
            background-color: white;
            border-radius: 100px;
            :hover{
            background-color: #262626;
            color: white;
        }
    }
`;