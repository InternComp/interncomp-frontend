import React, { useState } from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import bestIndustry from "./assets/bestIndustry.png";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/Home/Home"
const App = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'LoginPage':
        return <LoginPage />;
        case 'Home':
          return <Home />;
    }
  };

  return (
    <>
      <div className="w-[95%] m-auto bg-white">
        <Header setActiveComponent={setActiveComponent} />
      </div>
      {renderComponent()}
      <div className="w-[95%] m-auto bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
