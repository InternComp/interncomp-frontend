import React, { useState } from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import bestindustry from "./assets/bestindustry.svg";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home"
import CompaniesPage from "./Components/CompaniesPage/CompaniesPage";
const App = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'LoginPage':
        return <LoginPage />;
        case 'Home':
          return <Home />;
        case 'Companies':
          return <CompaniesPage />;
    }
  };

  return (
    <>
      <div className="w-[95%] m-auto bg-white">
        <Header setActiveComponent={setActiveComponent} />
      </div>
      {renderComponent()}
      <div className="w-full m-auto bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
