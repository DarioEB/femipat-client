import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Layouts
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutClient from './layouts/LayoutClient';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Events from './pages/Events';
import Contact from './pages/PageContact';

// Pages Admin
import EventsAdmin from './components/admin/events/EventsAdmin';
import NewEvent from './components/admin/events/NewEvent';

import ClubAdmin from './components/admin/club/ClubAdmin'
import NewClub from './components/admin/club/NewClub';

import LicensesAdmin from './components/admin/licenses/LicensesAdmin';
import ListLicences from './components/admin/licenses/ListLicenses';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"eventos"} element={<Events />} />
          <Route path={"contacto"} element={<Contact />} />
        </Route>
        <Route path={"/admin"} element={<LayoutAdmin />}  >
          <Route path={"eventos"} element={<EventsAdmin />} />
          <Route path={"eventos/nuevo"} element={<NewEvent />} />

          <Route path={"clubes"}  element={<ClubAdmin />} />
          <Route path={"clubes/nuevo"} element={<NewClub />} />

          <Route path={"licencias"} element={<LicensesAdmin />} />
          <Route path={"licencias/emit"} element={<ListLicences />} />
        </Route>
        <Route path={"/club-admin"} element={<LayoutAdmin />} >

        </Route>
      </Routes>
    </Router>
  )
}

export default App
