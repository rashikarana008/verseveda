import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import VersesPage from './components/VersesPage';
import CategoriesPage from './components/CategoriesPage';
import AIAssistantPage from './components/AIAssistantPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import AboutPage from './components/AboutPage';
import { mockVerses } from './data/mockData';
import { User, Verse } from './types';

const VerseVedaApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [dailyVerse, setDailyVerse] = useState<Verse | null>(null);

  // Initialize user and favorites from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('versevedaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedFavorites = localStorage.getItem('versevedaFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Set daily verse (would be based on date in real app)
    setDailyVerse(mockVerses[0]);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage dailyVerse={dailyVerse} setCurrentPage={setCurrentPage} />;
      case 'verses':
        return (
          <VersesPage
            verses={mockVerses}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedVerse={selectedVerse}
            setSelectedVerse={setSelectedVerse}
            favorites={favorites}
            setFavorites={setFavorites}
            user={user}
          />
        );
      case 'categories':
        return <CategoriesPage setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />;
      case 'ai-assistant':
        return <AIAssistantPage user={user} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} setUser={setUser} />;
      case 'signup':
        return <SignupPage setCurrentPage={setCurrentPage} setUser={setUser} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage dailyVerse={dailyVerse} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user} 
        setUser={setUser} 
      />
      {renderPage()}
    </div>
  );
};

export default VerseVedaApp;