import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Team from "./pages/Team";
import DFL from "./pages/DFL";
import Documents from "./pages/Documents";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/dfl" element={<DFL />} /> 
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
