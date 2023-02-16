import React, { CSSProperties } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
const styles: CSSProperties  = { 
  display: 'flex',
  flexDirection: 'column', 
}

function App() {
  return ( 
    <div className="App" style={styles}>
      <Header />
      <Routes>   
        <Route path={"/"} element={<Countries />}/>
        <Route path={"/country/:id"} element={<Country />}/>
      </Routes>
    </div>
  );
}

export default App;
