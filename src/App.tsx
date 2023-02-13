import React, { CSSProperties } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
const styles: CSSProperties  = { 
  display: 'flex',
  flexDirection: 'column', 
}

function App() {
  return ( 
    <div className="App" style={styles}>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
