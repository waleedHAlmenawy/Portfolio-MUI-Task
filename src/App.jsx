import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MUIAppBar from "./components/MUIAppBar";
import Section1 from "./components/Section1";
import { CssBaseline } from "@mui/material";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Section1></Section1>
      <MUIAppBar></MUIAppBar>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Footer></Footer>
    </>
  );
}

export default App;
