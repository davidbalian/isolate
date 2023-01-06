import React from "react";
import { Parallax } from "react-parallax";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import platform from "platform";
import Home from "./components/Home";

import img from "./isolate-bg-min.jpeg";
import IOSModal from "./components/IOSModal";

const App = () => {
  return (
    <div>
      <Header />
      {platform.manufacturer === "Apple" && window.innerWidth < 1024 ? (
        <IOSModal />
      ) : null}
      <div className="main">
        <Parallax strength={-200} bgImage={img}>
          <Home />
        </Parallax>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default App;
