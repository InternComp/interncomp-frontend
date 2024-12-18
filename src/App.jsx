import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home";
import CompaniesPage from "./Components/CompaniesPage/CompaniesPage";
import WelcomeNewUserPage from "./Components/WelcomeNewUserPage/WelcomeNewUserPage";
import CompanyPage from './Components/CompanyPage/CompanyPage';
import Jobs from './Components/JobPage/Jobs';
import AboutUs from './Components/AboutUs/AboutUs';
import UserProfilePage from './Components/UserProfilePage/UserProfilePage';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            {/*<Route path="/ComingSoon" element={<ComingSoon />} />*/}
            <Route path="/WelcomeNewUserPage" element={<WelcomeNewUserPage />} />
            <Route path="/Companies" element={<CompaniesPage />} />
            <Route path="/Companies/:id" element={<CompanyPage />} />
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
