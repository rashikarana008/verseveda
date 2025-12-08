import React from 'react';
import { Search, Heart, ChevronRight, BookOpen } from 'lucide-react';
import { Verse, User } from '../types';
import { categories } from '../data/mockData';
import VerseDetailPage from './VerseDetailPage';

interface VersesPageProps {
  verses: Verse[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedVerse: Verse | null;
  setSelectedVerse: (verse: Verse | null) => void;
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
  user: User | null;
}

const VersesPage: React.FC<VersesPageProps> = ({
  verses,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedVerse,
  setSelectedVerse,
  favorites,
  setFavorites,
  user
}) => {
  const filteredVerses = verses.filter(verse => {
    const matchesSearch = verse.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         verse.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         verse.application.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         verse.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || verse.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (verseId: number) => {
    if (!user) {
      alert('Please login to save favorites');
      return;
    }
    
    const newFavorites = favorites.includes(verseId)
      ? favorites.filter(id => id !== verseId)
      : [...favorites, verseId];
    
    setFavorites(newFavorites);
    localStorage.setItem('versevedaFavorites', JSON.stringify(newFavorites));
  };

  if (selectedVerse) {
    return (
      <VerseDetailPage 
        verse={selectedVerse} 
        setSelectedVerse={setSelectedVerse} 
        toggleFavorite={toggleFavorite} 
        favorites={favorites} 
        user={user} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sacred Verses</h1>
          <p className="text-gray-600">Explore timeless wisdom from ancient scriptures</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search verses, explanations, or applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVerses.map((verse) => (
            <div key={verse.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm text-orange-600 font-medium">
                    {verse.scripture} - {verse.chapter}
                  </div>
                  {user && (
                    <button
                      onClick={() => toggleFavorite(verse.id)}
                      className={`p-1 rounded-full transition-colors ${
                        favorites.includes(verse.id)
                          ? 'text-red-500 hover:text-red-600'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(verse.id) ? 'fill-current' : ''}`} />
                    </button>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{verse.translation}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {verse.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedVerse(verse)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVerses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No verses found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VersesPage;