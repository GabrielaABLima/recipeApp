import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import React from 'react'

function Recipe() {

    const[activeTab, setActiveTab] = useState("instructions");
    const [details, setDetails] = useState([]);
    const apiKey = '01f3e0b247b645daa7ac075670e93dad';
    let params = useParams();

    const fetchDetails = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${name}/information?apiKey=` + apiKey 
            );
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() =>{
        fetchDetails(params.name)
    }, [params.name]);
    
  return (
    <DetailWrapper>
        <Container>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
            

        </Container>
        <ContInfo>
            <Info>
                <Button className={activeTab === 'instructions'? 'active': ''} onClick={() => setActiveTab('instructions')}>
                    Instructions
                </Button>
                <Button className={activeTab === 'ingredients'? 'active': ''} onClick={() => setActiveTab('ingredients')}>
                    Ingredients
                </Button>
                
            </Info>
            {activeTab === 'instructions' && (
                <div>
                    <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
                    <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
            )}
                
                    
                
                
        </ContInfo>
        
    </DetailWrapper>
  )
}

const ContInfo = styled.div`
    display:flex;
    flex-direction: column;
    width:160%;

    h4{
        margin-top:2rem;
        margin-left: 2rem;
    }
`

const Container = styled.div`
    width:100%;
     img{
        margin-top: 1.6rem;
        width:100%;
        border-radius: 2rem;

     }
    
     h2{
        font-size: 1.2rem;
     }
`

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;

    }

    h2{
        margin-bottom: 2rem;
    }

    li{
        font-size: 1rem;
        line-height: 1.7rem;
        width:80%;
        margin-left: 3.7rem;
    }

    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-left: 2rem;
    font-weight: 600;
    border-radius: 2rem;

`

const Info = styled.div`

    display: flex;
    flex-direction: row;
    height: 3rem;

    

   
`

export default Recipe