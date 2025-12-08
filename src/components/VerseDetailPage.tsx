import React from 'react';
import { ChevronRight, Quote, Coffee, Heart } from 'lucide-react';
import { Verse, User } from '../types';

interface VerseDetailPageProps {
  verse: Verse;
  setSelectedVerse: (verse: Verse | null) => void;
  toggleFavorite: (verseId: number) => void;
  favorites: number[];
  user: User | null;
}

const VerseDetailPage: React.FC<VerseDetailPageProps> = ({
  verse,
  setSelectedVerse,
  toggleFavorite,
  favorites,
  user
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setSelectedVerse(null)}
          className="mb-6 flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Verses
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">{verse.scripture}</h1>
                <p className="text-orange-100">{verse.chapter}</p>
              </div>
              {user && (
                <button
                  onClick={() => toggleFavorite(verse.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.includes(verse.id)
                      ? 'text-white hover:text-orange-100'
                      : 'text-orange-200 hover:text-white'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${favorites.includes(verse.id) ? 'fill-current' : ''}`} />
                </button>
              )}
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Original Verse */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Quote className="w-5 h-5 text-orange-500" />
                Original Verse
              </h2>
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-lg text-gray-800 font-medium leading-relaxed">{verse.original}</p>
              </div>
            </div>

            {/* Translation */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Translation</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{verse.translation}</p>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Explanation</h2>
              <p className="text-gray-700 leading-relaxed">{verse.explanation}</p>
            </div>

            {/* Real-Life Application */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-orange-500" />
                Real-Life Application
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{verse.application}</p>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Topics</h2>
              <div className="flex flex-wrap gap-2">
                {verse.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerseDetailPage;