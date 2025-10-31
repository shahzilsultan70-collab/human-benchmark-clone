import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactionPage from "./pages/ReactionPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reaction" element={<ReactionPage />} />
      </Routes>
    </Router>
  );
}
export default App;
