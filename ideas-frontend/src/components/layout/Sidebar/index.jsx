import { Link, useNavigate } from "react-router-dom";
import { Folder, Home, LogIn, LogOut } from "lucide-react";
const Sidebar = () => {
  
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="pt-2 flex min-h-full bg-base-300 flex-col items-start is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow">
          {/* List item */}
          <li>
            <Link
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
              to="/"
            >
              <Home size="20" />
              <span className="is-drawer-close:hidden">Home</span>
            </Link>
          </li>

          <li className="">
            <Link
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Meus mods"
                to="/mymods"
              >
                <Folder size="20" />

                <span className="is-drawer-close:hidden">Meus mods</span>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
