import styled from 'styled-components'

export const Button = styled.button`
    margin: 40px 0 20px 0;
    font-size: 16px;
    color: white;
    padding: 20px 35px;
    background-color: #009be5;
    border: none;
    &:hover{
        background-color: #e62958;
        transition: 0.5s;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;