import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
const Layout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;