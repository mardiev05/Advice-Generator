import styled from "styled-components";


export const AppDiv = styled.div`
    background-color: hsl(218, 23%, 16%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CartDiv = styled.div`
    position: relative;
    background-color: hsl(217, 19%, 24%);
    width: 35%;
    padding: 25px 25px 55px 25px;
    text-align: center;
    border-radius: 10px;
`

export const CartTitle = styled.h5`
    font-size: 14px;
    font-family: monospace;
    FONT-WEIGHT: 500;
    color: hsl(150, 100%, 66%);
    letter-spacing: 1.5px;
`

export const CartP = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    letter-spacing: 2px;
    margin: 20px 0 30px 0;
    color: #fff;
`

export const ImgDiv = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    position: absolute;
    left: 45.5%;
    bottom: -20px;
    cursor: pointer;
`