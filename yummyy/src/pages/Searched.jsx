import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Searched() {

    const[searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
     
    const apiKey = '01f3e0b247b645daa7ac075670e93dad';
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=` + apiKey + `&number=9`
            );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Link to={"/Recipe/" + item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                    </Card>
                </Link>
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
`;

export default Searched