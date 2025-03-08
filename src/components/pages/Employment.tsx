import { useEffect } from 'react';
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainP, StyledMainH3 } from '../interfaces/Main';
import { StyledTitle, StyledCard } from '../interfaces/Details';
import Footer from '../interfaces/Footer';

export default function Employment() {
    useEffect(() => {
        document.title = "Employment | Online Resume"
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Employment</StyledTitle>

                    <StyledCard>
                        <StyledMainH3>Software Engineering Intern @ Publicis Sapient</StyledMainH3>
                        <StyledMainP>Collaborated on a team with 3 other Software Engineers and 2 Product Managers to create a full-stack mobile stock trading app emphasizing education/financial literacy and leveraging AI technology within Financial Services. Utilized technoglogies such as React Native, Node.js and Express, PostgreSQL, and Expo.</StyledMainP>
                    </StyledCard>

                    <StyledCard>
                        <StyledMainH3>Ice Cream Scooper @ Mora's Iced Creamery</StyledMainH3>
                        <StyledMainP>Worked in a team while maintaining high quality customer service and preparing orders with high attention to detail during busy hours. Also worked with a POS system, food preparation, and opening and closing duties.</StyledMainP>
                    </StyledCard>
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}