import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGet_PokemonsQuery } from "./generated/graphql";

function App() {
  const { loading, error, data } = useGet_PokemonsQuery();
  if (loading || error) {
    return <div>loading...</div>;
  }
  return (
    <div className="App">
      {data?.pokemons?.map((pokemon) => (
        <>
          <div>{JSON.stringify(pokemon)}</div>
        </>
      ))}
    </div>
  );
}

export default App;
