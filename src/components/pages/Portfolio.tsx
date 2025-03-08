import { useEffect } from 'react';
import { styled } from 'styled-components';
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainH3, StyledMainP } from '../interfaces/Main';
import { StyledTitle, StyledCard, StyledImg} from '../interfaces/Details';
import Footer from '../interfaces/Footer';

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vh;
`;

export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio | Online Resume"
    });

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Portfolio</StyledTitle>
                    <StyledMainH3>All photos and art by me!</StyledMainH3>

                    <StyledPortfolio>
                        <StyledCard>
                            <StyledImg src="../../../public/study.jpeg" alt="Study of Nydia, the Blind Girl of Pompeii"/>
                            <StyledMainP>A study of Randolph Rogers' Nydia, the Blind Flower Girl of Pompeii (1856).</StyledMainP>
                        </StyledCard>

                        <StyledCard>
                            <StyledImg src="../../../public/cannon-beach.jpg" alt="Cannon Beach, OR"/>
                            <StyledMainP>Cannon Beach, OR.</StyledMainP>
                        </StyledCard>

                        <StyledCard>
                            <StyledImg src="../../../public/la-jolla.jpg" alt="La Jolla, CA"/>
                            <StyledMainP>La Jolla, CA</StyledMainP>
                        </StyledCard>
                    </StyledPortfolio>

                    
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}