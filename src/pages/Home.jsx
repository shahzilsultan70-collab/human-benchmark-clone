import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const tests = [
    {
      title: "Reaction Time",
      desc: "Test your visual reflexes.",
      link: "/reaction",
      icon: (
        <svg
          width="70"
          height="90"
          viewBox="0 0 100 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <path d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z" />
        </svg>
      ),
    },
    {
      title: "Sequence Memory",
      desc: "Remember button patterns.",
      link: "#",
      icon: (
        <svg
          width="90"
          height="70"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <rect width="58" height="58" rx="10" />
          <rect x="70" width="58" height="58" rx="10" />
          <rect y="70" width="58" height="58" rx="10" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
          />
        </svg>
      ),
    },
    {
      title: "Aim Trainer",
      desc: "How quickly can you hit targets?",
      link: "#",
      icon: (
        <svg
          width="90"
          height="70"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 118C93.8234 118 118 93.8234 118 64C118 34.1766 93.8234 10 64 10C34.1766 10 10 34.1766 10 64C10 93.8234 34.1766 118 64 118ZM64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 97C82.2254 97 97 82.2254 97 64C97 45.7746 82.2254 31 64 31C45.7746 31 31 45.7746 31 64C31 82.2254 45.7746 97 64 97ZM64 107C87.7482 107 107 87.7482 107 64C107 40.2518 87.7482 21 64 21C40.2518 21 21 40.2518 21 64C21 87.7482 40.2518 107 64 107Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 76C70.6274 76 76 70.6274 76 64C76 57.3726 70.6274 52 64 52C57.3726 52 52 57.3726 52 64C52 70.6274 57.3726 76 64 76ZM64 86C76.1503 86 86 76.1503 86 64C86 51.8497 76.1503 42 64 42C51.8497 42 42 51.8497 42 64C42 76.1503 51.8497 86 64 86Z"
          />
        </svg>
      ),
    },
    {
      title: "Number Memory",
      desc: "Remember the longest number you can.",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-20 h-20 mx-auto mb-3 text-[rgb(43,135,209)] opacity-80 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 transition-all duration-300"
        >
          <rect width="128" height="128" rx="16" fill="currentColor" />

          <text x="35" y="50" fontSize="32" fontWeight="bold" fill="white">
            1
          </text>
          <text x="75" y="50" fontSize="32" fontWeight="bold" fill="white">
            2
          </text>
          <text x="35" y="95" fontSize="32" fontWeight="bold" fill="white">
            3
          </text>
          <text x="75" y="95" fontSize="32" fontWeight="bold" fill="white">
            ?
          </text>
        </svg>
      ),
    },
    {
      title: "Verbal Memory",
      desc: "Keep as many words in short term memory as possible.",
      link: "#",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <path d="M20 20h88v88H20z" />
          <path
            d="M40 45h48v10H40zM40 63h48v10H40zM40 81h48v10H40z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Chimp Test",
      desc: "Are you smarter than a chimpanzee?",
      link: "#",
      icon: (
        <svg
          width="90"
          height="70"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <rect width="58" height="58" rx="10" />
          <rect x="70" width="58" height="58" rx="10" />
          <rect y="70" width="58" height="58" rx="10" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
          />
        </svg>
      ),
    },
    {
      title: "Visual Memory",
      desc: "Remember an increasingly large board of squares.",
      link: "#",
      icon: (
        <svg
          width="90"
          height="70"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <rect width="58" height="58" rx="10" />
          <rect x="70" width="58" height="58" rx="10" />
          <rect y="70" width="58" height="58" rx="10" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
          />
        </svg>
      ),
      wide: true,
    },
    {
      title: "Typing",
      desc: "How many words per minute can you type?",
      link: "#",
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 128 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 transition-all duration-300 group-hover:text-[rgb(255,147,69)] group-hover:opacity-100 text-[rgb(43,135,209)] opacity-50"
        >
          <rect x="10" y="20" width="108" height="20" rx="4" />
          <rect x="10" y="50" width="108" height="20" rx="4" />
          <rect x="10" y="80" width="108" height="20" rx="4" />
        </svg>
      ),
      wide: true,
    },
  ];

  return (
    <div>
      {/* 🟦 Hero Section */}
      <div className="bg-[rgb(43,135,209)] flex flex-col items-center justify-center text-center py-20 px-4">
        <svg
          width="120"
          height="150"
          viewBox="0 0 100 128"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white mb-4"
        >
          <path d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z" />
        </svg>

        <h1 className="text-white text-[80px] font-normal mb-4">
          Human Benchmark
        </h1>
        <p className="text-white text-2xl mb-8">
          Measure your abilities with brain games and cognitive tests.
        </p>
        <button className="bg-[rgb(255,209,84)] text-black font-semibold px-8 py-4 rounded-md hover:brightness-110 transition">
          Get Started
        </button>
      </div>

      {/* 🧠 Test Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-8 py-12 bg-slate-200">
        {tests.slice(0, 6).map((t, i) => (
          <Card key={i} {...t} />
        ))}

        {/* For 7th & 8th cards, put them in a sub-container */}
        <div className="flex flex-wrap justify-center gap-8 w-[970px]">
          {tests.slice(6, 8).map((t, i) => (
            <Card
              key={i + 6}
              {...t}
              style={{ width: "470px", height: "267.73px" }}
            />
          ))}
        </div>
      </div>

      {/* ⚙️ Footer */}
      <div className="text-center text-gray-500 py-6 border-t">
        Copyright © {new Date().getFullYear()} — Human Benchmark clone (demo)
      </div>
    </div>
  );
}
