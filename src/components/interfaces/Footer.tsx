import { styled } from 'styled-components';
import { StyledLink } from './Details';

const StyledFooter = styled.footer`
    text-align: center;
    background: rgba(108, 75, 94, 0.5);
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Kenna Wylie <StyledLink to="/credits">Credits</StyledLink> &#169;</p>
        </StyledFooter>
    );
}