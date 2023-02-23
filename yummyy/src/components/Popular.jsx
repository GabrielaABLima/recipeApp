import { useEffect, useState } from "react";
import styled from "styled-components";
import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import React from "react";
import {Link} from 'react-router-dom';

const style = { color: "rgb(222, 104, 100)", fontSize: "1.5rem", margin: '0px 10px 0px 10px'}







function Popular() {

  const [popular, setPopular] = useState([]);
  
  
    useEffect(() =>{
        getPopular();
    },[]);

    const getPopular = async () => {

      const check = localStorage.getItem('popular');
      if(check){
        setPopular(JSON.parse(check));
      }else{
        const apiKey = '01f3e0b247b645daa7ac075670e93dad';
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=` + apiKey + `&number=9`
          );
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }

        
    }


  return (
    <div>
          <Wrapper>
            <h3>Receitas Populares</h3>

            <Splide options={{
              perPage: 4,
              drag: 'free',
              gap:'1rem',
            }}>
              {popular.map((recipe) => {
                return (
                  <SplideSlide>
                    <Card key={recipe.id}>
                      <Link to={"/Recipe/" + recipe.id}>
                        <p><GiForkKnifeSpoon style={style}/>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                      </Link>
                    </Card>
                  </SplideSlide>
                ); 
              })}
            </Splide>
            
          </Wrapper>

    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;


const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  display: flex;

  
  img{
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index: 10;
    bottom: 20%;
    transform: trasnlate(-50%, 0%);
    color: black;
    width: 102%;
    text-align: center;
    font-weight:600;
    font-size:80%;
    height:20%;
    display:flex;
    align-items:center;
    background: rgba(255,255,255,0.9);
    margin-left: -2%;
  }
`;


export default Popular