import { styled } from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background: rgba(108, 75, 94, 0.5);

    @media screen and (max-width: 750px) {
        align-items: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Kenna Wylie</h1>
            <p>Online Resume</p>
        </StyledHeader>
    );
}