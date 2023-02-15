import React, { CSSProperties } from "react";
import Country from "./pages/Country";
const styles: CSSProperties  = { 
  display: 'flex',
  flexDirection: 'column', 
}

function App() {
  return ( 
    <div className="App" style={styles}>
      <Country/>
    </div>
  );
}

export default App;
