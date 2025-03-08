import { useEffect } from 'react';
import Header from '../interfaces/Header';
import Nav from '../interfaces/Nav';
import { MainContainer, StyledMain, StyledMainP } from '../interfaces/Main';
import { StyledTitle, StyledCard, StyledImg, StyledImgContainer} from '../interfaces/Details';
import Footer from '../interfaces/Footer';

export default function Home() {
    useEffect(() => {
        document.title = "Homepage | Online Resume"
    }, []);

    return (
        <>
            <Header />
            <MainContainer>
                <Nav />
                <StyledMain>
                    <StyledTitle>Home</StyledTitle>

                    <StyledImgContainer>
                        <StyledImg src="../../../me.jpeg" alt="Kenna Wylie"/>
                    </StyledImgContainer>

                    <StyledCard>
                        <StyledMainP>My name is Kenna Wylie and I am a senior studying Computer Science at Boston University. I am interested in Front-End Design as well as Game Development and would love to expand my knowledge and learn more. With my impending graduation in Spring 2025, I am seeking a full-time position within the tech industry.</StyledMainP>
                        <br />
                        <StyledMainP>Welcome! On this website you'll find information relating to my educational and employment background, as well as other information like extracurriculars!</StyledMainP>
                    </StyledCard>
                </StyledMain>
            </MainContainer>

            <Footer />
        </>
    );
}