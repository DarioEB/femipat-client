import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
const LayoutClient = () => {

    return (
        <main className="layout-client">
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}

export default LayoutClient;