import { Link } from 'react-router-dom';
import { NAVSIDEBAR } from '../../UI';

const NavClub = () => {

    return (
        <NAVSIDEBAR>
            <Link
                to={"/club-admin"}
                className="link-nav"
            >
                Staff
            </Link>
            <Link
                to={"/club-admin"}
                className="link-nav"
            >
                Licencias Club
            </Link>
            <Link
                to={"/club-admin"}
                className="link-nav"
            >
                Listas
            </Link>
            <Link
                to={"/club-admin"}
                className="link-nav"
            >
                Club
            </Link>
            <Link
                to={"/club-admin"}
                className="link-nav"
            >
                Analytics
            </Link>
        </NAVSIDEBAR>
    );
}

export default NavClub;