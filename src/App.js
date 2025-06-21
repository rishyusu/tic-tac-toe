import React from "react";
import GameBoard from "./GameBoard";
import gameStore from "./store";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchGameStatus = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is just a demo fetch using React Query.");
    }, 500);
  });

function StatusMessage() {
  const { data, isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: fetchGameStatus,
  });
  
  if (isLoading) return <p>Loading game status...</p>;
  return <p>{data}</p>;
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

