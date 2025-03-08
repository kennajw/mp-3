import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'; 
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainP, StyledMainH3 } from '../interfaces/Main';
import { StyledTitle, StyledCard } from '../interfaces/Details';
import Footer from '../interfaces/Footer';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Online Resume"
    });

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Projects</StyledTitle>

                    <StyledCard>
                        <StyledMainH3>SLAY!</StyledMainH3>
                        <StyledMainP>A simple browser RPG created entirely utilizing the Django framework. The user is able to create an account and character, earn exp and coins, and fight enemies. Play here: <StyledLink to="https://desolate-coast-54135-0f75cceed39c.herokuapp.com/rpg/">SLAY!</StyledLink></StyledMainP>
                    </StyledCard>

                    ADD CALCULATOR!!!
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}