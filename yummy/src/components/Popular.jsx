import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

  const [popular, setPopular] = useState([]);

    useEffect(() =>{
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
        const data = await api.json();
        setPopular(data.recipes);
    }


  return (
    <div>
          <Wrapper>
            <h3>Receitas Populares</h3>

            <Splide options={{
              perPage: 4,
              drag: 'free',
              gap:'5rem',
            }}>
              {popular.map((recipe) => {
                return (
                  <SplideSlide>
                    <Card key={recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title}/>
                      
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
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 18vw;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
    transform: trasnlate(-50%, 0%);
    color: black;
    width: 100%;
    text-align: center;
    font-weight:600;
    font-size:1rem;
    height:70%;
    display:flex;
    align-items:center;
    background: white;
  }
`;

export default Popular