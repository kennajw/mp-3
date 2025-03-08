import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledNav = styled.nav`
    width: 30%;
    background: rgba(179, 103, 155, 0.5);

    @media screen and (max-width: 750px) {
        width: 100%;
        background: rgba(179, 103, 155, 0.5);
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    list-style: none;
    padding-left: 0;
    font-size: calc(2px + 1.5vw);
    font-weight: 500;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding-left: 0;
    }
`

const StyledLi = styled.li`
    width: 90%;
    margin: 5vh auto;
    padding: 1.5vh;
    border-radius: 5px;
    background: rgba(179, 103, 155, 0.4);

    @media screen and (max-width: 750px) {
        border-radius: 5px;
        background: rgba(179, 103, 155, 0.4);
        padding: 1% .5%;
        margin: 1% .5%;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLi>

                <StyledLi>
                    <StyledLink to="/education">Education</StyledLink>
                </StyledLi>

                <StyledLi>
                    <StyledLink to="/employment">Employment</StyledLink>
                </StyledLi>

                <StyledLi>
                    <StyledLink to="/projects">Projects</StyledLink>
                </StyledLi>

                <StyledLi>
                    <StyledLink to="/extracurriculars">Extracurriculars</StyledLink>
                </StyledLi>

                <StyledLi>
                    <StyledLink to="/portfolio">Portfolio</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}