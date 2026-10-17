// src/components/MtgLifeCounter.jsx
// Componente principal del contador de vida para Magic The Gathering (2 jugadores).
// Entregable 2 – Se agrega propiedad 'name' al modelo de datos y campo de texto editable.

import { useState, Fragment } from 'react';
import PlayerCard from './PlayerCard';
import './MtgLifeCounter.css';

const INITIAL_LIFE = 20;

// Estado inicial de cada jugador: { id, name, life }
const initialPlayers = [
  { id: 1, name: 'Jugador 1', life: INITIAL_LIFE },
  { id: 2, name: 'Jugador 2', life: INITIAL_LIFE },
];

function MtgLifeCounter() {
  const [players, setPlayers] = useState(initialPlayers);

  // Actualiza la vida de un jugador identificado por su id
  const updateLife = (id, delta) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, life: player.life + delta } : player
      )
    );
  };

  // Actualiza el nombre de un jugador identificado por su id
  const updateName = (id, newName) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, name: newName } : player
      )
    );
  };

  // Reinicia ambos jugadores a su estado inicial tras confirmación nativa del navegador
  const handleReset = () => {
    const confirmed = window.confirm(
      '¿Estás seguro de que deseas reiniciar la vida de ambos jugadores a 20?'
    );
    if (confirmed) {
      setPlayers(initialPlayers);
    }
  };

  return (
    <div className="mtg-life-counter">
      <h1 className="app-title">⚔️ MTG Life Counter</h1>

      <div className="players-container">
        {players.map((player, index) => (
          <Fragment key={player.id}>
            {/* Separador VS entre los dos jugadores */}
            {index === 1 && (
              <div className="divider">VS</div>
            )}

            <PlayerCard
              playerName={player.name}
              life={player.life}
              onIncrease={() => updateLife(player.id, +1)}
              onDecrease={() => updateLife(player.id, -1)}
              onNameChange={(e) => updateName(player.id, e.target.value)}
            />
          </Fragment>
        ))}
      </div>

      <button className="btn btn-reset" onClick={handleReset}>
        🔄 Reiniciar
      </button>
    </div>
  );
}

export default MtgLifeCounter;
