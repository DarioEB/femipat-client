import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { Outlet, useLocation } from 'react-router-dom';
import { ADMIN, Header, CONTAINER } from '../UI';



const Club = () => {

    return (
        <ADMIN>
            <Header>
                <div className="location">
                    <ChevronDoubleRightIcon className="icon" />
                    {/* <p>{titles[location.pathname.split("/admin/")[1]]}</p> */}
                </div>
                <div className="logout">
                    <div className="user">
                        <p>Sesión <span>Club</span></p>
                    </div>
                    <button
                        type="button"
                        className="btn-logout"
                    >Cerrar sesión</button>
                </div>
            </Header>
            <CONTAINER>
                <Outlet />
            </CONTAINER>
        </ADMIN>
    );
}

export default Club;