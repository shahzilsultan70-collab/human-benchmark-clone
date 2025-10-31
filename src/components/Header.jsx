export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow px-20 py-4">
      <a href="/" className="text-xl font-thin text-black">
        ⚡HUMAN BENCMARK
      </a>

      <nav className="space-x-6">
        <a
          href="/signup"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          SIGN UP
        </a>
        <a
          href="/login"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          LOGIN
        </a>
      </nav>
    </header>
  );
}
