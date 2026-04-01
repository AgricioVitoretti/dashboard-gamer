type Game ={
    id: number;
    name: string;
    genre: string;
    platform: string;
};

type Props ={
    game: Game;
};

function GameCard({ game }: Props) {
    return (
        <div>
            <h2>{game.name}</h2>
            <p>Gênero: {game.genre}</p>
            <p>Platorma: {game.platform}</p>
        </div>
    );
}

export default GameCard;