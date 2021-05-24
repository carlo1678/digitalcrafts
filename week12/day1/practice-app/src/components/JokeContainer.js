import React from "react";
import Jokes from "./Jokes";
import { useState, useEffect } from "react";

export default function JokeContainer() {
  const [joke, setJoke] = useState("");
  const [oldJokes, setOldJokes] = useState([]);

  useEffect(() => {
    getDadJokes();
  }, []);

  const getDadJokes = async () => {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: { Accept: "application/json" },
    });
    const json = await response.json();

    setJoke(json.joke);
  };

  return (
    <div>
      <h1>JokeContainer</h1>
      <Jokes joke={joke} setJoke={setJoke} />
      <button onClick={() => getDadJokes()}>New Joke</button>
    </div>
  );
}
