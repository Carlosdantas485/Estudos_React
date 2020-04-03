import React, {useEffect, useState} from 'react';
import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa';

import Container from'../../components/Container';
import {Form, SubmitButton, List} from './styles';

export default function Main(){
    
    const [newReple, SetNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <Container>
            <h1>
                <FaGithubAlt/>
                Nome do Repositório
            </h1>
            
            <Form>
                <input/> 
                <SubmitButton>
                    <FaPlus color="#fff" size={15}/>
                </SubmitButton>
            </Form>

            <List>

            </List>

        </Container>

        

        
    );
}