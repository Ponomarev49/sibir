import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} /> 
      </Routes>
    </Router>
  );
}

export default App;
