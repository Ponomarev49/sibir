import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";
import Doping from "./pages/Doping"
import Champ_russia from "./pages/Champ_russia";
import Cup_russia from "./pages/Cup_russia";
import Team from "./pages/Team";
import LFL from "./pages/LFL";
import DFL from "./pages/DFL";
import Documents_sibir from "./pages/Documents_sibir";
import Documents_federation from "./pages/Documents_federation";
import ScrollToTop from "./components/ScrollToTop";
import Partners from "./components/Partners"
import ClubShowcase from "./components/Random_players"
import NewsList from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import LatestNews from "./components/LatestNews";
import YandexMetrika from './components/YandexMetrika';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Омский Флорбол</title>
        <meta name="description" content="Официальная страница Омского флорбола. Матчи ФлК Сибирь, матчи ДФЛ и ЛФЛ Омск, новости Федерации Флорбола Омской Области." />
        <meta name="keywords" content="флорбол, Сибирь, чемпионат, сайт, матчи, таблица, турнир" />
        <link rel="canonical" href="https://floorballomsk.ru/" />
        <meta name="yandex-verification" content="4d24070d6a03722c" />
      </Helmet>
      <YandexMetrika />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <LatestNews />
              <ClubShowcase />
              <Partners/>
            </>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/doping" element={<Doping />} />
        <Route path="/champ_russia" element={<Champ_russia />} />
        <Route path="/cup_russia" element={<Cup_russia />} />
        <Route path="/lfl" element={<LFL />} /> 
        <Route path="/dfl" element={<DFL />} /> 
        <Route path="/documents_sibir" element={<Documents_sibir />} />
        <Route path="/documents_federation" element={<Documents_federation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
