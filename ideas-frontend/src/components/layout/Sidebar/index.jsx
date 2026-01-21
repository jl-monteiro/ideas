import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed shadow h-screen w-32 bg-gray-300 p-4 left-0 top-16">
      
      <nav className="p-4 space-y-2">
        <SidebarItem
          icon={<FaPlus size={30} />}
          onClick={() => alert("Side Home")}
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center hover:bg-gray-200 justify-center gap-3 w-full p-2 rounded-md transition cursor-pointer"
    >
      {icon}
    </button>
  );
};

export default Sidebar;
