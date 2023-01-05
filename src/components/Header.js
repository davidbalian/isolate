import React, { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    })
  })

  return (
    <div className={scroll ? "header header-scroll" : "header"}>
      <h1 className={scroll ? "logo header-logo-scroll" : "logo"}>isolate</h1>
    </div>
  );
};

export default Header;
