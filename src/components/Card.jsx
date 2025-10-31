import { Link } from "react-router-dom";

export default function Card({ title, desc, link, icon }) {
  return (
    <Link
      to={link}
      className="group"
      style={{ width: "310px", height: "267.73px" }}
    >
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-3 p-6 text-center flex flex-col justify-center items-center h-full">
        {icon}
        <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </Link>
  );
}
