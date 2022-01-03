
import Admin from '../components/Admin';
import Sidebar from '../components/Sidebar';

const LayoutAdmin = () => {
    return (
        <main className="layout-admin">
            <Sidebar />
            <Admin />
        </main>
    )
}

export default LayoutAdmin;
