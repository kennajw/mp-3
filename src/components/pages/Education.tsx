import { useEffect } from 'react';
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainP, StyledMainH3 } from '../interfaces/Main';
import { StyledTitle, StyledCard } from '../interfaces/Details';
import Footer from '../interfaces/Footer';

export default function Education() {
    useEffect(() => {
        document.title = "Education | Online Resume"
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Education</StyledTitle>

                    <StyledCard>
                        <StyledMainH3>Boston University - B.A. in Computer Science</StyledMainH3>
                        <StyledMainP>GPA: 3.780 | Expected Graduation: May 2025</StyledMainP>
                        <StyledMainP>Dean's List Special Distinction: Fall 2021; Dean's List: Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024.</StyledMainP>
                    </StyledCard>
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}