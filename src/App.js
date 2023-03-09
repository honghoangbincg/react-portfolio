import React, { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./secens/Navbar";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={selectedPage} />
    </div>
  );
}

export default App;
