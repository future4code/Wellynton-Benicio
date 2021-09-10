import styled from 'styled-components';

export const StyledFooter = styled.header`
    height: 10%;
    background-color: grey;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center`;

export const H4 = styled.h4`
margin-left: 20px;
`



function Header() {
  return (
    <StyledFooter>
      <H4>Oi! Eu moro no footer!</H4>
    </StyledFooter>
  );
}

export default Header;
