import { Link, useLocation } from 'react-router-dom';
// images
import Logo from '../assets/images/logo2.png';
// styled-components
import styled from '@emotion/styled';

import { useEffect, useState } from 'react';

const HeaderContainer = styled.header`
    position: fixed;
    background-color: transparent;
    width: 100%;
    top: 0;
    padding: 1rem 0;
    left: 0%;
    z-index: 12;
    transition: all .4s ease-out;
    &.back {
        background-color: rgba(0, 0, 0, 0.92);
    }
    @media (min-width: 768px) {
        padding: 1.5rem 0;
    }
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const NavigationHeader = styled.nav`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        .link-nav {
            font-size: 2rem;
            color: var(--white);
            font-weight: 500;
            transition: all .4s ease-out;
            &.hover-red {
                &:hover {
                    color: var(--red);
                }
            }
            &:hover {
                color: var(--gray);
            }
            &.login {
                background: var(--blue);
                padding: 1rem 1.5rem;
                border-radius: 2rem;
                color:var(--white);
                font-weight: 700;
                text-transform: uppercase;
                font-size: 1.8rem;
                &:hover {
                    color: var(--red);
                }
                
            }
        }
    }

`



const MobileMenu = styled.div`
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
    .menu-btn {
        background: var(--blue);
        width: 6rem;
        height: 4.5rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .menu-btn-bar {
            width: 4rem;
            height: .25rem;
            border-radius: 2rem;
            position: relative;
            background: var(--white);
            &::before,
            &::after {
                border-radius: 2rem;
                position: absolute;
                content: '';
                width: 100%;
                height: .25rem;
                left: 0%;
                background: var(--white);
            }
            &::before {
                transform: translateY(1rem);
            }
            &::after {
                transform: translateY(-1rem);
            }
        }

    }
`

const Header = () => {

    const location = useLocation();
    const [home, setHome] = useState(false);
    const [back, setBack] = useState(false);

    useEffect( () => {
        if( location.pathname === '/' || location.pathname === '/login') {
            setHome(true);
            setBack(false);
        } else {
            setHome(false);
            setBack(true);
        }
    }, [location.pathname]);

    window.onscroll = () => {
        let s = window.scrollY;
        if(home) {
            if(s > 760) {
                setBack(true);
            } else {
                setBack(false);
            }
        }
    }

    return (
        <HeaderContainer
            className={back ? 'back' : ''}
        >
            <div className="container">
                <HeaderContent>
                    <Link
                        to={"/"}
                        className="logo-header"
                    >
                        <img 
                            src={Logo}
                            alt={"Logotipo header"}
                        />
                    </Link>
                    <NavigationHeader>
                        <Link
                            to={"/eventos"}
                            className={`link-nav ${back ? 'hover-red' : ''}`}
                        >Eventos</Link>
                        <Link
                            to={"/info"}
                            className={`link-nav ${back ? 'hover-red' : ''}`}
                        >+ INFO</Link>
                        <Link
                            to={"/contacto"}
                            className={`link-nav ${back ? 'hover-red' : ''}`}
                        >Contacto</Link>
                        <Link
                            to={"/login"}
                            className="link-nav login"
                        >Iniciar Sesión</Link>
                    </NavigationHeader>
                    <MobileMenu>
                        <button className="menu-btn">
                            <span className="menu-btn-bar"></span>
                        </button>
                    </MobileMenu>
                </HeaderContent>
            </div>
        </HeaderContainer>
    );
}

export default Header;