import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVSIDEBAR } from '../../UI';
import { ChevronDownIcon } from '@heroicons/react/outline';


const NavAdmin = () => {

    
    const [menu, setMenu] = useState(false);

    return (
        <NAVSIDEBAR>
            <Link
                to={"/admin/eventos"}
                className="link-nav"
            >
                Eventos
            </Link>
            <Link
                to={"/admin/clubes"}
                className="link-nav"
            >
                Clubes
            </Link>
            <Link
                to={"/admin/licencias"}
                className="link-nav"
            >
                Licencias
            </Link>
            <div className="menu-others">
                <button
                    type="button"
                    className="link-nav others"
                    onClick={() => setMenu(!menu)}
                >
                    <span>Otros</span>
                    <ChevronDownIcon className="icon" />
                </button>
                <nav className={`nav-menu-others ${menu ? 'view' : ''}`}>
                    <Link
                        to={"/admin"}
                        className="link-nav"
                    >Funciones</Link>
                    <Link
                        to={"/admin"}
                        className="link-nav"
                    >Ramas</Link>
                    <Link
                        to={"/admin"}
                        className="link-nav"
                    >Especialidades</Link>
                    <Link
                        to={"/admin"}
                        className="link-nav"
                    >Divisiones</Link>
                    <Link
                        to={"/admin"}
                        className="link-nav"
                    >Categorías</Link>
                </nav>
            </div>
            <Link
                to={"/admin/analytics"}
                className="link-nav"
            >Analytics</Link>
        </NAVSIDEBAR>
    );
}

export default NavAdmin;