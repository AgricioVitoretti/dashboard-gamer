 import { useEffect, useState } from "react";
 import GameCard from "./components/GameCard";
 import "./App.css";
 import type { Game } from "./types/Game";

 function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoanding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setLoanding(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando jogos...</p>;
  }

  return (
    <div>
      <h1>DashBoard Gamer</h1>
      {games.map((game)=>(
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
 }

 export default App;