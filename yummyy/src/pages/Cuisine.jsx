import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    const apiKey = 'a0ef93691a754665b3e0205ec1210cb0';
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=` + apiKey + `&number=9`
            );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() =>{
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type ]);
  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>

                </Card>
            ) 
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1.5rem;

`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Cuisine