 import { useEffect, useState } from "react";
 
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
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>Gênero: {game.genre}</p>
          <p>Plataforma: {game.plataform}</p>
        </div>
      ))}
    </div>
  );
 }

 export default App;