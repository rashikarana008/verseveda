import React from 'react';
import { Home, MessageCircle } from 'lucide-react';
import { User } from '../types';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('versevedaUser');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              VerseVeda
            </span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'home' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('verses')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'verses' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Verses
            </button>
            <button 
              onClick={() => setCurrentPage('categories')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'categories' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Categories
            </button>
            <button 
              onClick={() => setCurrentPage('ai-assistant')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'ai-assistant' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              AI Assistant
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'about' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              About
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <button className="md:hidden p-2">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;