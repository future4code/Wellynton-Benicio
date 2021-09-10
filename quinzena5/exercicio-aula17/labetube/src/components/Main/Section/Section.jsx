import styled from 'styled-components';

export const StyledSection = styled.section`
    padding-left: 20px;
    padding-top: 20px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 24.8% 0.2%);
    grid-template-rows: repeat(4, 270px 20px);
div {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    align-items: start;
    justify-items: stretch;
}`; 

export const Div1 = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
img {
    width: 100%;
    height: 200px;
}`;

export const Div2 = styled.div`
    grid-column-start: 3;
    grid-row-start: 1;
img {
    width: 100%;
    height: 200px;
}`;

export const Div3 = styled.div`
    grid-column-start: 5;
    grid-row-start: 1;
img {
    width: 100%;
    height: 200px;
}`;

export const Div4 = styled.div`
    grid-column-start: 7;
    grid-row-start: 1;
img {
    width: 100%;
    height: 200px;
}`;

export const Div5 = styled.div`
    grid-column-start: 1;
    grid-row-start: 3;
img {
    width: 100%;
    height: 200px;
}`;

export const Div6 = styled.div`
    grid-column-start: 3;
    grid-row-start: 3;
img {
    width: 100%;
    height: 200px;
}`;

export const Div7 = styled.div`
    grid-column-start: 5;
    grid-row-start: 3;
img {
    width: 100%;
    height: 200px;
}`;

export const Div8 = styled.div`
    grid-column-start: 7;
    grid-row-start: 3;
img {
    width: 100%;
    height: 200px;
}`;

function Section() {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    };

  return (
    <StyledSection>
        <Div1 onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
            <h4>Título do vídeo</h4>
       </Div1>
    
       <Div2 onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
            <h4>Título do vídeo</h4>
       </Div2>
     
       <Div3 onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
            <h4>Título do vídeo</h4>
       </Div3>
    
       <Div4 onClick={reproduzVideo}>
           <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
           <h4>Título do vídeo</h4>
       </Div4>
    
       <Div5 onClick={reproduzVideo}>
           <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
           <h4>Título do vídeo</h4>
        </Div5>
           
        <Div6 onClick={reproduzVideo}>
           <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
           <h4>Título do vídeo</h4>
        </Div6>
    
        <Div7 onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
            <h4>Título do vídeo</h4>
        </Div7>
    
        <Div8 onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
            <h4>Título do vídeo</h4>
        </Div8>
    </StyledSection>
  );
}

export default Section;