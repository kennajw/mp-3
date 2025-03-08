import { styled } from 'styled-components';
import { useState } from 'react';

const CalcContainer = styled.div`
    background-color: #8ACE00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 1vh;
    font-family: 'Arial', sans-serif;
    width: 50%;
    border: 2px solid black;
    border-radius: 5px;
    margin: 2vh auto;
    color: black;
`;

const CalcH1 = styled.h1`
    text-align: center;
    font-size: calc(2px + 2vw);
`;

const PositiveOutput = styled.p`
    font-size: calc(1.5vh + 2px);
    color: black;
`;

const NegativeOutput = styled.p`
    font-size: calc(1.5vh + 2px);
    color: red;
`;

const OutputContainer = styled.div`
    display: flex;
    color: black;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CalcLabel = styled.label`
    font-size: calc(1.5vh + 2px);
    margin: 1vh;
`;

const CalcButton = styled.button`
    background-color: black;
    color: #8ACE00;
    border: none;
    border-radius: 50%;
    margin: .2vh;
    height: 2vh;
`;

const CalcInput = styled.input`
    border-color: black;
    width: 50%;
    height: 10%;
`;

const InputContainer = styled.div`
    justify-content: center;
`;

export default function Calc() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    function add() {
        let firstNum = Number(first);
        let secondNum = Number(second);

        setResult(String(firstNum + secondNum))
    }

    function subtract() {
        let firstNum = Number(first);
        let secondNum = Number(second);

        setResult(String(firstNum - secondNum))
    }

    function multiply() {
        let firstNum = Number(first);
        let secondNum = Number(second);

        setResult(String(firstNum * secondNum))
    }

    function divide() {
        let firstNum = Number(first);
        let secondNum = Number(second);

        setResult(String(firstNum / secondNum))
    }

    function power() {
        let firstNum = Number(first);
        let secondNum = Number(second);

        let negative = false;
        let temp;
    
        if (secondNum < 0) {
            negative = true;
            temp = secondNum * -1;
        } else {
            temp = secondNum;
        }
    
        let tempResult = 1;
    
        for (let i = 0; i < temp; i++) {
            tempResult = firstNum * tempResult;
        }
    
        if (negative) {
            tempResult = 1 / tempResult;
        }

        setResult(String(tempResult));
    }

    function clear() {
        setFirst("");
        setSecond("");
        setResult("");
    }

    return (
        <CalcContainer>
            <CalcH1>brat calc</CalcH1>

            <CalcLabel>first number:</CalcLabel>
            <InputContainer>
                <CalcInput type="text" value={first} onChange={(val) => setFirst(val.target.value)}/>
            </InputContainer>

            <CalcLabel>second number:</CalcLabel>
            <InputContainer>
                <CalcInput type="text" value={second} onChange={(val) => setSecond(val.target.value)}/>
            </InputContainer>

            <ButtonContainer>
                <CalcButton onClick={add}>+</CalcButton>
                <CalcButton onClick={subtract}>-</CalcButton>
                <CalcButton onClick={multiply}>x</CalcButton>
                <CalcButton onClick={divide}>/</CalcButton>
                <CalcButton onClick={power}>^</CalcButton>
                <CalcButton onClick={clear}>c</CalcButton>
            </ButtonContainer>

            <OutputContainer>
                {Number(result) >= 0 && result !== null && <PositiveOutput>{result}</PositiveOutput>}
                {Number(result) < 0 &&  result != null && <NegativeOutput>{result}</NegativeOutput>}
            </OutputContainer>
        </CalcContainer>
    );
}