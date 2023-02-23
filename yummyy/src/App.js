import Pages from "./pages/Pages";
import React from "react";
import Categorie from "./components/Categorie";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiHotMeal} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiHotMeal/>
          <Logo to={'/'}>Yummyy</Logo>
        </Nav>
        <Search/>
        <Categorie/> 
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:4rem;
  font-weight:400;
  font-family: 'Lobster Two', cursive;
  color: rgb(222, 104, 100);

  `;

  const Nav = styled.div`
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      font-size: 3rem;
      margin-right:1.5rem;
      color: rgb(222, 104, 100);
    }
  `

export default App;
