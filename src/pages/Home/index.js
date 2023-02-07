import React from 'react';
import { Container, List, Unit } from './styles';

function Home() {
  return (
  <Container>
    <List>
        <Unit>
        <p>Salario</p>
        <strong>R$ 2.000,00</strong>        
        </Unit>

        <Unit>
        <p>Freelancer</p>
        <strong>R$ 2.000,00</strong>
                
        </Unit>

        <Unit>
        <p>Jantar</p>
        <strong>R$ 227,00</strong>   
        </Unit>
        
        <Unit>
        <p>Alquiler</p>
        <strong>R$ 2.227,00</strong>  
        </Unit>
    </List>
    <button type="button">Nueva Operacion</button>
  </Container>
  );
}

export default Home;
