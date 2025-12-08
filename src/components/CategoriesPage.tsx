import React from 'react';
import { Sparkles, Sun, Star, Heart } from 'lucide-react';

interface CategoriesPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (category: string) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ setCurrentPage, setSelectedCategory }) => {
  const categoryDetails = [
    {
      id: 'motivation',
      name: 'Motivation',
      description: 'Verses that inspire action, perseverance, and achieving your goals',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500',
      count: '150+ verses'
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness',
      description: 'Teachings on presence, awareness, and living in the moment',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-500',
      count: '120+ verses'
    },
    {
      id: 'wisdom',
      name: 'Wisdom',
      description: 'Deep insights about life, truth, and the nature of existence',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-500',
      count: '200+ verses'
    },
    {
      id: 'relationships',
      name: 'Relationships',
      description: 'Guidance on love, compassion, and connecting with others',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-400 to-pink-500',
      count: '80+ verses'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('verses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find verses organized by life themes and spiritual topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryDetails.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
            >
              <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                {category.icon}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{category.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                <div className="text-orange-600 font-medium text-sm">{category.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;