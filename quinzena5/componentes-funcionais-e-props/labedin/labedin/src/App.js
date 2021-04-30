import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://drive.google.com/file/d/1FDKCkhkgFPJjt9rJwAnyijkwybWFEwsK/view?usp=sharing"
          nome="Wellynton" 
          descricao="Oi, eu sou o Wellynton. Sou um dos alunos da Labenu. Adoro todas as aulas e as trocas de experiência que temos via Slack e no nosso grupo de WhatsApp."
        />

        <CardPequeno
        imagem='#https://www.clipartmax.com/png/middle/358-3582635_mail-pishing-spam-icon-email-envelope-icon-png.png'
        nome='E-mail: well.03281@gmail.com'
        />
        
        <CardPequeno
        imagem='#https://www.clipartmax.com/png/middle/358-3582635_mail-pishing-spam-icon-email-envelope-icon-png.png'
        nome='Endereço: São Bernardo do Campo'
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>

        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Dev Front-End - Labenu" 
          descricao="Desenvolvendo códigos extremamente fantásticos." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Dev Front-end NASA" 
          descricao="Apontando defeitos nos códigos de outrxs Dev´s." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
