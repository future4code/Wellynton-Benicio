import styled from 'styled-components';
import Nav from './Nav/Nav';
import Section from './Section/Section';

export const StyledMain = styled.header`
    min-height: 80%;
    display: flex;
`;

function Main() {
  return (
    <StyledMain>
      <Nav /> 
      <Section />
    </StyledMain>
  );
}

export default Main;
