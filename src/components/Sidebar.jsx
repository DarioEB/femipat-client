import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import styled from '@emotion/styled';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import NavClub from './admin/NavClub';
import NavAdmin from './admin/NavAdmin';

const SIDEBAR = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: var(--white);
    /* box-shadow: .5rem 0 .25rem var(--shadow); */
    @media (min-width: 768px) {
        background: var(--blue);
        flex: 0 0 25%;
    }
    @media (min-width: 992px) {
        flex: 0 0 16.6%;
    }
`

const IMAGESIDEBAR = styled.div`
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    background: var(--white);
    margin: 0rem auto 0 auto;
`

const Sidebar = () => {

    const location = useLocation();
    const [nav, setNav] = useState('');

    useEffect( () => {
        if(location.pathname.includes('/club-admin')) {
            setNav('club-admin'); 
        }
        if (location.pathname.includes('/admin') ) {
            setNav('admin');
        }
    }, [location.pathname]);

    console.log(nav);

    return (
        <SIDEBAR>
            <IMAGESIDEBAR>
                <img 
                    src={Logo}
                    alt="Logo Femipat"
                />
            </IMAGESIDEBAR>
            {
                nav === 'club-admin' &&
                <NavClub />
            }
            {
                nav === 'admin' &&
                <NavAdmin />
            }
        </SIDEBAR>
    );
}

export default Sidebar;