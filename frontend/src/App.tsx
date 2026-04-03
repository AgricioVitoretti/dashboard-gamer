 import { useEffect, useState } from "react";
 import GameCard from "./components/GameCard";
 import "./App.css";

type Game = {
  id: number;
  name: string;
  genre: string;
  platform: string;
};

 function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

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