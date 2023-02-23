import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Search = () => {

    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input); 
    };

  return (
    <FormStyled onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
                   
        </div>
        
    </FormStyled>
  )
}

const FormStyled = styled.form`
    margin: 0rem 0.5rem;
    
    width: 100%;

    div{
        width: 100%;
        position: relative;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.1rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width:100%;
        margin-top: 5rem;
    }

    svg{
        position: absolute;
        top: 80%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search