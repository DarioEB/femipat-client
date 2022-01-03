import styled from '@emotion/styled';
import Logo from '../assets/images/logo2.png';
const FooterContent = styled.footer`
    padding: 2rem 0;
    background: var(--black);
    text-align: center;
    display :flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.4rem;
        color: var(--gray);    
        letter-spacing: 1px;
        span {
            font-weight: 900;
            color: var(--red);
            font-style: italic;
        }
    }
    img {
        width: 4rem;
    }
`

const Footer = () => {

    return (
        <FooterContent>
            <p>
                &copy; Copyright {new Date().getFullYear()} - <span>FEMIPAT</span> 
            </p>
            <img 
                src={Logo}
                alt={`Logotipo Femipat`}
            />
        </FooterContent>
    );
}

export default Footer;