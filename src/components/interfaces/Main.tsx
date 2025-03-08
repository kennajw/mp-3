import { styled } from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2vh;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        padding-left: 0;
        margin-left: auto;
    }
`;

const StyledMainP = styled.p`
    margin: 1vw;
    font-size: calc(2px + 1.6vw);

    @media screen and (max-width: 750px) {
        margin: 2% 2%;
        font-size: calc(2px + 3vw);
    }
`;

const StyledMainH3 = styled.h3`
    font-size: calc(2px + 1.8vw);
    text-align: center;

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 3.1vw);
        text-align: center;
    }
`;

export {MainContainer, StyledMain, StyledMainP, StyledMainH3};