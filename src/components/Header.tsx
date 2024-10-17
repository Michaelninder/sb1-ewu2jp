import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Globe, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Server className="mr-2" /> XP-Hostde
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200 flex items-center">
                <Globe className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/status" className="hover:text-blue-200 flex items-center">
                <Server className="mr-1" /> Status
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-blue-200 flex items-center">
                <Users className="mr-1" /> Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;