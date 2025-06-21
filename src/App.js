import React from "react";
import GameBoard from "./GameBoard";
import gameStore from "./store";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchGameStatus = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return data.fact;
};

function StatusMessage() {
  const { data, isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: fetchGameStatus,
  });
  
  if (isLoading) return <p>Loading game status...</p>;
  return <p>Random cat fact: {data}</p>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 style={{ textAlign: "center" }}>Tic-Tac-Toe</h1>
        <StatusMessage />
        <GameBoard store={gameStore} />
      </div>
    </QueryClientProvider>
  );
}

export default App;

