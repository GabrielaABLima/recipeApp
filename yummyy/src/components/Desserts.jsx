import { useEffect, useState } from "react";
import styled from "styled-components";
import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import { GiWrappedSweet } from 'react-icons/gi';
import {Link} from 'react-router-dom';

import React from "react";

const style = { color: "rgb(222, 104, 100)", fontSize: "1.5rem", margin: '0px 10px 0px 10px'}



function Desserts() {
    const [dessert, setDessert] = useState([]);
  
  
    useEffect(() =>{
        getDessert();
    },[]);

    const getDessert = async () => {

      const check = localStorage.getItem('dessert');
      if(check){
        setDessert(JSON.parse(check));
      }else{
        const apiKey = '01f3e0b247b645daa7ac075670e93dad';
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=&apiKey=` + apiKey + `&number=9`
          );
        const data = await api.json();
        

        localStorage.setItem('dessert', JSON.stringify(data.results));
        setDessert(data.results);
      }

        
    }

    return (
        <div>
            <Wrapper>
            <h3>Sobremesas</h3>

            <Splide options={{
                perPage: 3,
                drag: 'free',
                gap:'1rem',
            }}>
                {dessert.map((recipe) => {
                return (
                    <SplideSlide>
                    <Card key={recipe.id}>
                        <Link to={"/Recipes/" + recipe.id}>
                          <p><GiWrappedSweet style={style}/>{recipe.title}</p>
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
  bottom:0%;
 
  color: black;
  width: 100%;
  text-align: center;
  font-weight:600;
  font-size:80%;
  height:20%;
  display:flex;
  align-items:center;
  background: rgba(255,255,255,0.9);
}
`;
  
  export default Desserts


