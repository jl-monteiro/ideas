import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";
const Sidebar = () => {
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();

  const handleLogin = () => {
    if (session) {
      authClient.signOut();
      return;
    } else {
      navigate("/login");
      return;
    }
  };

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-zinc-700 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow">
          {/* List item */}
          <li>
            <button
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
              onClick={() => navigate("/")}
            >
              {/* Home icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span className="is-drawer-close:hidden">Home</span>
            </button>
          </li>

          <li>
            <button
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip={session ? "Logout" : "Login"}
              onClick={handleLogin}
            >
              <CiLogin size="18" />

              <span className="is-drawer-close:hidden">
                {session ? "Logout" : "Login"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
