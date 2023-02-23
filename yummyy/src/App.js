import Pages from "./pages/Pages";
import React from "react";
import Categorie from "./components/Categorie";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Categorie/> 
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
