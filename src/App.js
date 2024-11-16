import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Content from "./components/Content/Content";
import "./styles/global.scss";

function App() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <div className="App">
      <Header />
      <SideMenu activeIndex={activeIndex} onMenuClick={handleMenuClick} />
      <Content activeIndex={activeIndex} onClose={closeModal} />
    </div>
  );
}

export default App;
