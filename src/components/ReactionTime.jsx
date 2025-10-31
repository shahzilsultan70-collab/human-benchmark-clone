import { useState, useRef } from "react";
import api from "../api/apiClient";

export default function ReactionTime({ onGameStart, onReady, onGameEnd }) {
  const [status, setStatus] = useState("start");
  const [message, setMessage] = useState("Click anywhere to start.");
  const [result, setResult] = useState(null);
  const startTime = useRef(0);
  const timeoutRef = useRef(null);

  const startGame = () => {
    setStatus("waiting");
    setMessage("..... Wait for green");
    onGameStart(); // 🔴 background becomes red

    const delay = 1000 + Math.random() * 3000; // random delay
    timeoutRef.current = setTimeout(() => {
      setStatus("ready");
      setMessage("...... Click!");
      onReady(); // 🟩 background turns green
      startTime.current = performance.now();
    }, delay);
  };

  const handleClick = async () => {
    if (status === "start") {
      // Start the test
      setResult(null);
      startGame();
    } else if (status === "waiting") {
      // Clicked too early
      clearTimeout(timeoutRef.current);
      setStatus("start");
      setResult(null);
      setMessage("! Too soon! Click to try again.");
      onGameEnd(); // 🔵 back to blue
    } else if (status === "ready") {
      // Correct click — measure reaction time
      const reaction = Math.round(performance.now() - startTime.current);
      setResult(reaction);
      setStatus("start");
      setMessage("Click to try again!");
      onGameEnd(); // 🔵 back to blue
      await api.post("/saveReaction", { score: reaction });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full flex flex-col justify-center items-center text-center p-10 rounded-lg cursor-pointer select-none"
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
        {message}
      </h2>
      {result && (
        <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mt-3">
          Your time: {result} ms
        </p>
      )}
    </div>
  );
}
