import { useState } from "react";
import ReactionTime from "../components/ReactionTime";

export default function ReactionPage() {
  const [bgColor, setBgColor] = useState("blue"); // default background

  const handleGameStart = () => setBgColor("red"); // 🔴 waiting state
  const handleReady = () => setBgColor("green"); // 🟩 ready to click
  const handleGameEnd = () => setBgColor("blue"); // 🔵 reset after result or fail

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center text-white transition-colors duration-500 ${
        bgColor === "blue"
          ? "bg-[rgb(51,141,214)]"
          : bgColor === "red"
          ? "bg-red-500"
          : "bg-green-500"
      }`}
    >
      {/* Only show title + icon on blue screen (before test or after result) */}
      {bgColor === "blue" && (
        <>
          {/* Logo */}
          <svg
            width="80"
            height="100"
            viewBox="0 0 100 128"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4 animate-pulse"
          >
            <path d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z" />
          </svg>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Reaction Time Test
          </h1>

          {/* Instructions */}
          <div className="text-center text-white opacity-90 text-lg sm:text-xl md:text-2xl mb-10">
            <h2>When the red box turns green, click as quickly as you can.</h2>
            <h2>Click anywhere to start.</h2>
          </div>
        </>
      )}

      {/* Game Component */}
      <ReactionTime
        onGameStart={handleGameStart}
        onReady={handleReady}
        onGameEnd={handleGameEnd}
      />
    </div>
  );
}
