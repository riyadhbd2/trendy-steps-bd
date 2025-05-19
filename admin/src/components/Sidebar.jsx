import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Package } from 'lucide-react';

const Sidebar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Dashboard', icon: <Home size={18} /> },
    { to: '/users', label: 'Users', icon: <Users size={18} /> },
    { to: '/products', label: 'Products', icon: <Package size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
