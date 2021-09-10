import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
    margin: 0;`;


function Header() {
  return (
    <StyledHeader>
      <h1>Lab Tube</h1>
      <input type="text" placeholder="Busca"></input>
    </StyledHeader>
  );
}

export default Header;
