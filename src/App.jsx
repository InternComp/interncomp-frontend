import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home";
import CompaniesPage from "./Components/CompaniesPage/CompaniesPage";
import WelcomeNewUserPage from "./Components/WelcomeNewUserPage/WelcomeNewUserPage";
import CompanyPage from './Components/CompanyPage/CompanyPage';
import Jobs from './Components/JobPage/Jobs';
import AddJob from './Components/AddJob/AddJob';

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
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/Jobs" element={<Jobs />} />
            {/*<Route path="/AddJobs" element={<AddJob />} />*/}

          </Routes>
        </div>
        <ConditionalFooter />
      </Router>
    </div>
  )
}

const ConditionalFooter = () => {
  const location = useLocation();
  
  // Exclude the footer on the /AddJobs route
  if (location.pathname === '/AddJobs' || location.pathname === '/Jobs') {
    return null;
  }
  
  return <Footer />;
};

export default App;
