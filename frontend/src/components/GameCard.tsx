import "./GameCard.css";
import type { Game } from "../types/Game";

type Props ={
    game: Game;
};

function GameCard({ game }: Props) {
    return (
        <div className="game-card">
            <h2>{game.name}</h2>
            <p>Gênero: {game.genre}</p>
            <p>Plataforma: {game.platform}</p>
        </div>
    );
}

export default GameCard;