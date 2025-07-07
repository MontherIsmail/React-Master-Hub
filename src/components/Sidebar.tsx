import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Expenses", path: "/expenses" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "Todo", path: "/todo" },
    { name: "Notes", path: "/notes" },
  ];

  return (
    <div className="w-64 h-screen shadow-xl text-white p-4">
      <h5 className="text-2xl font-bold text-gray-900 mb-10 mt-2">
        React Master Hub
      </h5>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`block px-4 py-2 rounded transition ${
                location.pathname === link.path
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <p className="text-gray-900">{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
