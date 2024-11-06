import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home";
import WelcomeNewUserPage from "./Components/WelcomeNewUserPage/WelcomeNewUserPage";
import UserProfilePage from './Components/UserProfilePage/UserProfilePage';
import RecruiterProfile from './Components/RecruiterProfilePage/RecruiterProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/WelcomeNewUserPage" element={<WelcomeNewUserPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} />
        <Route path="/RecruiterProfilePage" element={<RecruiterProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
