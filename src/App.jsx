import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home";
import WelcomeNewUserPage from "./Components/WelcomeNewUserPage/WelcomeNewUserPage";
import CompanyPage from "./Components/CompanyPage/CompanyPage";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/WelcomeNewUserPage" element={<WelcomeNewUserPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
