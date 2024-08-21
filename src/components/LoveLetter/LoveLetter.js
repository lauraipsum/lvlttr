import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './videoplayback.m4a';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className="container">
      {!isOpen && <div className="message">CLIQUE NA CARTA PARA ABRIR</div>} {/* Condicional para mostrar a mensagem piscante */}
      <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
        <div className="flap"></div>
        <div className="body"></div>
        <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
          O que é o amor?<br />
          Mas é muito simples!<br />
          O amor é tudo o que intensifica, amplia, enriquece nossa vida. <br />
          Em direção de todos os cumes e de todos os abismos.<br />
          Realmente. Kafka fi do canso que sabe das coisas.<br />
          Eu já me indaguei muito sobre isso. Com meu embasamento cultural de uma folha de coentro, sempre <br />
          contribuia na conversa comigo mesma com aquilo que muito conheço, e com o que em algum momento julguei conhecer.<br />
          Mas aí algo aconteceu no dia 21 de julho de 2024.<br />
          E dali pra frente essa indagação foi promovida a reflexão. Menos acusativa, mais introspectiva.<br />
          E dali pra frente, tudo que meu parceiro do besouro na cama falou se encaixou majestosamente. <br /><br />
          Por esse primeiro de todos os meses outros que virão, obrigada, meuamô .<br />
        </div>
        <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
      </div>
    </div>
  );
};

export default LoveLetter;
