import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ADMIN, Header, CONTAINER } from '../UI';
import { useState, useEffect } from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'


const titles = {
    "/admin": "Administración",
    "/admin/eventos": "Eventos",
    "/admin/eventos/nuevo": "Nuevo Evento",
    "/admin/clubes": "Clubes",
    "/admin/clubes/nuevo": "Nuevo Club",
    "/admin/licencias": "Licencias",
    "/admin/licencias/emit": "Licencias y Estados",
    "/club-admin": "Club"
}

const Admin = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const [stateLocation, setStateLocation] = useState('');

    useEffect( () => {
        setStateLocation(location.pathname);
    }, []);

    return (
        <ADMIN>
            <Header>
                <div className="location">
                    <ChevronDoubleRightIcon className="icon" />
                    <p>{titles[stateLocation]}</p>
                </div>
                <div className="logout">
                    <div className="user">
                        {
                            location.pathname.includes('/club-admin') ? (
                                <p>Sesión <span>Club</span></p>
                            ): null
                        }
                        {
                            location.pathname.includes('/admin') ? (
                                <p>Sesión <span>Administrador</span></p>
                            ) : null
                        }
                    </div>
                    <button
                        type="button"
                        className="btn-logout"
                        onClick={() => navigate('/login')}
                    >Cerrar sesión</button>
                </div>
            </Header>
            <CONTAINER>
                <Outlet />
            </CONTAINER>
        </ADMIN>
    );
}

export default Admin;