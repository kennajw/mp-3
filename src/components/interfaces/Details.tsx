import { styled } from 'styled-components';

const StyledTitle = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2.3vw);

    @media screen and (max-width: 750px) {
        text-align: center;
        font-size: calc(2px + 3.3vw);
    }
`;

const StyledCard = styled.div`
    padding: 1vh;
    margin: 1vh 1vw;
    background: rgba(157, 106, 137, 0.5);
    border-radius: 5px;

    @media screen and (max-width: 750px) {
        justify-content: center;
        background: rgba(157, 106, 137, 0.5);
        border-radius: 5px;
    }
`;

const StyledImg = styled.img`
    max-width: 40%;
    border-radius: 5%;
`;

const StyledImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2vh;
`;

export {StyledTitle, StyledCard, StyledImg, StyledImgContainer};