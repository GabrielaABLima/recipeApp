import Pages from "./pages/Pages";
import React from "react";
import Categorie from "./components/Categorie";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Categorie/> 
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
