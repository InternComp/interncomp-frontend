import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import bestIndustry from "./assets/bestIndustry.png";

const App = () => {
  return (
    <>
      <div className="w-[95%] m-auto bg-white">
        <Header />
      </div>

      <div className="w-full">
        <img src={bestIndustry} alt="Join the best companies" className="w-full max-w-[100%] " />
      </div>

      <div className="w-[95%] m-auto bg-white">
        <Footer />
      </div>
    </>
  );
}

export default App;