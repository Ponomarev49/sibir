import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Team from "./pages/Team";
import DFL from "./pages/DFL";
import Documents from "./pages/Documents";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/dfl" element={<DFL />} /> 
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
