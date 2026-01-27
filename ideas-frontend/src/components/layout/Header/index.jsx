import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";
import { LogIn, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      navigate("/login");
    } catch (e) {
      console.error("Logout failed", e);
    }
  };
  return (
    <nav className="bg-base-300 navbar w-full">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        {/* Sidebar toggle icon */}
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
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M9 4v16"></path>
          <path d="M14 10l2 2l-2 2"></path>
        </svg>
      </label>
      <div className="px-4 navbar-start">ideas</div>
      <div className="px-8 navbar-end">
        {session ? (
          <button
            className="btn btn-ghost btn-sm hover:text-error"
            aria-label="Logout"
            onClick={handleLogout}
          >
            <LogOut size="20" />

          </button>
        ) : (
          <button
            className="btn btn-ghost btn-sm"
            aria-label="Login"
            onClick={handleLogin}
          >
            <LogIn size="20" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
