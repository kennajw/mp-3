import { useEffect } from 'react';
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainP, StyledMainH3 } from '../interfaces/Main';
import { StyledTitle, StyledCard } from '../interfaces/Details';
import Footer from '../interfaces/Footer';

export default function Extracurriculars() {
    useEffect(() => {
        document.title = "Extracurriculars | Online Resume"
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Extracurriculars/Hobbies</StyledTitle>

                    <StyledCard>
                        <StyledMainH3>BU Board Games - Vice President/Lead Event Coordinator</StyledMainH3>
                        <StyledMainP>Collaborate with other executive board members to make budgets, maintain weekly meetings, fundraise, and plan special events such as Trivia Night, Escape Room, and Murder Mystery.</StyledMainP>
                    </StyledCard>

                    <StyledCard>
                        <StyledMainH3>Art</StyledMainH3>
                        <StyledMainP>I have always loved art and was actually admitted to BU as a Visual Arts major my freshman year! I like to create in a variety of mediums such as graphite, oil pastels, oil paint, printmaking, and more.</StyledMainP>
                    </StyledCard>
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}