// src/components/PlayerCard.jsx
// Componente que representa la tarjeta de vida de un jugador individual.

function PlayerCard({ playerName, life, onIncrease, onDecrease }) {
  return (
    <div className="player-card">
      <h2 className="player-name">{playerName}</h2>

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
