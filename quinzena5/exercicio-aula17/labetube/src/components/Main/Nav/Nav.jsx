import styled from 'styled-components';

export const StyledNav = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
`;

export const BotoesMenuVertical = styled.li `
    list-style-type: none;
`; 


function Nav() {
  return (
    <StyledNav>
        <ul>
            <BotoesMenuVertical/>Início
            <BotoesMenuVertical/>Em alta
            <BotoesMenuVertical/>Inscrições
            <hr></hr>
            <BotoesMenuVertical/>Originais
            <BotoesMenuVertical/>Histórico
        </ul>
    </StyledNav>
  );
}

export default Nav;