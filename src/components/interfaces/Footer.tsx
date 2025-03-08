import { Link } from 'react-router';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    background: rgba(108, 75, 94, 0.5);
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Kenna Wylie <Link to="/credits">Credits</Link> &#169;</p>
        </StyledFooter>
    );
}