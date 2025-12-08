import React from 'react';
import { Heart, Star, BookOpen, Bot, Coffee, Search, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About VerseVeda</h1>
          <p className="text-xl text-gray-600">Making ancient wisdom accessible for modern life</p>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-500" />
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At VerseVeda, we believe that the timeless wisdom of ancient scriptures should be accessible 
              to everyone, regardless of their background or level of spiritual knowledge. Our platform 
              transforms complex Sanskrit verses into simple, understandable language with practical 
              applications that relate to modern life situations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're dealing with work stress, relationship challenges, or seeking personal growth, 
              the ancient texts contain profound insights that can guide you. We make these teachings 
              relevant and actionable for today's world.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Simplicity</h3>
              <p className="text-gray-600">Making complex spiritual concepts easy to understand and apply</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Relevance</h3>
              <p className="text-gray-600">Connecting ancient wisdom to modern life challenges and situations</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">Available anytime, anywhere, for everyone seeking spiritual growth</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">What Makes VerseVeda Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Bot className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">AI-Powered Assistant</h3>
                  <p className="text-orange-100">Get personalized explanations and verse recommendations tailored to your life situations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Coffee className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Real-Life Applications</h3>
                  <p className="text-orange-100">Every verse comes with practical examples from corporate, personal, and social contexts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Search className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Smart Search</h3>
                  <p className="text-orange-100">Find verses by keywords, life situations, or spiritual topics quickly and easily</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Daily Wisdom</h3>
                  <p className="text-orange-100">Receive a carefully selected verse each day to inspire and guide your journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              Thousands of people are already using VerseVeda to bring ancient wisdom into their daily lives. 
              Join our community of spiritual seekers and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">10,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Verses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Topics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;