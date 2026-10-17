// src/components/MtgLifeCounter.jsx
// Componente principal del contador de vida para Magic The Gathering (2 jugadores).
// Entregable 1 – Contador de Vida MTG

import { useState } from 'react';
import PlayerCard from './PlayerCard';
import './MtgLifeCounter.css';

const INITIAL_LIFE = 20;

function MtgLifeCounter() {
  const [player1Life, setPlayer1Life] = useState(INITIAL_LIFE);
  const [player2Life, setPlayer2Life] = useState(INITIAL_LIFE);

  // Incrementa la vida del jugador 1
  const increasePlayer1 = () => setPlayer1Life((prev) => prev + 1);
  // Decrementa la vida del jugador 1
  const decreasePlayer1 = () => setPlayer1Life((prev) => prev - 1);

  // Incrementa la vida del jugador 2
  const increasePlayer2 = () => setPlayer2Life((prev) => prev + 1);
  // Decrementa la vida del jugador 2
  const decreasePlayer2 = () => setPlayer2Life((prev) => prev - 1);

  // Reinicia ambos jugadores a 20 tras confirmación nativa del navegador
  const handleReset = () => {
    const confirmed = window.confirm(
      '¿Estás seguro de que deseas reiniciar la vida de ambos jugadores a 20?'
    );
    if (confirmed) {
      setPlayer1Life(INITIAL_LIFE);
      setPlayer2Life(INITIAL_LIFE);
    }
  };

  return (
    <div className="mtg-life-counter">
      <h1 className="app-title">⚔️ MTG Life Counter</h1>

      <div className="players-container">
        <PlayerCard
          playerName="Jugador 1"
          life={player1Life}
          onIncrease={increasePlayer1}
          onDecrease={decreasePlayer1}
        />

        <div className="divider">VS</div>

        <PlayerCard
          playerName="Jugador 2"
          life={player2Life}
          onIncrease={increasePlayer2}
          onDecrease={decreasePlayer2}
        />
      </div>

      <button className="btn btn-reset" onClick={handleReset}>
        🔄 Reiniciar
      </button>
    </div>
  );
}

export default MtgLifeCounter;
