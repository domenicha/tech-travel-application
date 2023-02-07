import styled from 'styled-components';

export const Container = styled. main`
width: 100%;
margin-top: 45px;
display: flex;
justify-content: center;

button {
    background-color: #0676d9;
    color: #fff;
    border: 0;
    border-radius: 5px;
}
`;

export const List = styled.ul`
max-width: 958px;
width: 100%;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap:10px;
`;

export const Unit = styled.li`
background-color: #fff;
border-radius: 5px;
padding: 20px 20px;

p{
    font-weight: 600;
    font-size: 16px;
    color: #000;
    margin-top: 2px;
}
`;





