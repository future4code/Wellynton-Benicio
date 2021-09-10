import styled from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

export const Body = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const Div = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column; 
`;


function App() {
  return (
    <Body>
      <Div>
        <Header/>
        <Main />
        <Footer />
      </Div>
    </Body>
  );
}

export default App;
