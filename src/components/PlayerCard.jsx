// src/components/PlayerCard.jsx
// Componente que representa la tarjeta de vida de un jugador individual.
// Entregable 2 – Se agrega input de texto controlado para editar el nombre del jugador.

function PlayerCard({ playerName, life, onIncrease, onDecrease, onNameChange }) {
  return (
    <div className="player-card">
      {/* Campo de texto controlado: el value viene del estado y onChange actualiza el estado */}
      <input
        type="text"
        className="player-name-input"
        value={playerName}
        onChange={onNameChange}
        placeholder="Nombre del jugador"
        maxLength={20}
      />

      <p className="life-display">{life}</p>

      <div className="player-controls">
        <button className="btn btn-increase" onClick={onIncrease}>
          +1
        </button>
        <button className="btn btn-decrease" onClick={onDecrease}>
          -1
        </button>
      </div>
    </div>
  );
}

export default PlayerCard;
