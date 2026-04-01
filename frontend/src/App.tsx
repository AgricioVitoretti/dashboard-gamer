 import { useEffect, useState } from "react";
 import GameCard from "./components/GameCard";

 function App() {
  const [games, setGames] = useState<any[]>([]);

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