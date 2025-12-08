import React from 'react';
import { ChevronRight, Bot, Calendar, Quote, BookOpen, Heart, Search } from 'lucide-react';
import { Verse } from '../types';

interface HomePageProps {
  dailyVerse: Verse | null;
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ dailyVerse, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Ancient Wisdom
            </span>
            <br />
            <span className="text-gray-800">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the timeless teachings of sacred scriptures with simple translations 
            and real-life examples that make ancient wisdom relevant to modern life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setCurrentPage('verses')}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Explore Verses
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setCurrentPage('ai-assistant')}
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <Bot className="w-5 h-5" />
              AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* Daily Verse Section */}
      {dailyVerse && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800">Daily Verse</h2>
              </div>
              <p className="text-gray-600">Today's wisdom for your journey</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
              <div className="text-center mb-6">
                <Quote className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <p className="text-lg italic text-gray-700 mb-4">{dailyVerse.original}</p>
                <p className="text-gray-600">{dailyVerse.translation}</p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Today's Application:</h4>
                <p className="text-gray-600 mb-4">{dailyVerse.application}</p>
                <div className="text-sm text-orange-600 font-medium">
                  {dailyVerse.scripture} - {dailyVerse.chapter}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose VerseVeda?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Simple Translations</h3>
              <p className="text-gray-600">Complex Sanskrit verses made easy to understand</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Real-Life Examples</h3>
              <p className="text-gray-600">Practical applications for modern life situations</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Bot className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Assistant</h3>
              <p className="text-gray-600">Get personalized explanations and recommendations</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Search className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Search</h3>
              <p className="text-gray-600">Find verses by topic, keyword, or situation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;