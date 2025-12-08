import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { User, Message } from '../types';

interface AIAssistantPageProps {
  user: User | null;
}

const AIAssistantPage: React.FC<AIAssistantPageProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "🙏 Namaste! I'm your AI spiritual assistant. I can help you understand verses, find relevant teachings, and provide personalized guidance. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Help me understand karma yoga",
    "Find verses about dealing with stress",
    "What does the Gita say about success?",
    "Recommend verses for motivation",
    "Explain detachment in simple terms"
  ];

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('karma') || lowerMessage.includes('duty')) {
      return "🎯 Karma Yoga teaches us to perform our duties without attachment to results. As the Bhagavad Gita says: 'You have the right to perform your duties, but not to the fruits of action.' This means focus on doing your best work whether it's your job, relationships, or personal goals, but don't be anxious about outcomes. Would you like me to find specific verses about karma yoga?";
    }
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('anxiety') || lowerMessage.includes('worry')) {
      return "🧘‍♀️ For stress and anxiety, the scriptures teach us about maintaining equanimity. The Gita advises: 'Remain balanced in success and failure - such equanimity is called yoga.' Practical tip: When stressed, remember that this situation is temporary. Focus on what you can control (your actions) rather than what you can't (outcomes). Would you like verses specifically about finding inner peace?";
    }
    
    if (lowerMessage.includes('success') || lowerMessage.includes('achievement')) {
      return "🌟 True success according to the Gita isn't just external achievement, but inner growth and dharmic action. Success comes from doing your duty well, helping others, and maintaining integrity. The verse 'Better is one's own dharma, though imperfectly performed, than the dharma of another well performed' teaches us to focus on our unique path. What area of success are you working on?";
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('inspire')) {
      return "💪 For motivation, remember that you have infinite potential within. The Gita says 'Arise, awake, and stop not until the goal is reached.' Every challenge is an opportunity to grow stronger. Start with small, consistent actions toward your goal. Even Krishna had to lift the Govardhan hill stone by stone! What specific goal do you need motivation for?";
    }
    
    if (lowerMessage.includes('detachment') || lowerMessage.includes('letting go')) {
      return "🍃 Detachment doesn't mean not caring - it means caring without being controlled by outcomes. Like a gardener who plants seeds, waters them, and then trusts nature. You do your part with love and dedication, but accept whatever results come. This reduces stress and increases effectiveness. It's freedom from the anxiety of 'what if?' Would you like practical exercises for developing detachment?";
    }
    
    return "🕉️ That's a wonderful question! The ancient scriptures contain deep wisdom on this topic. While I can provide general guidance based on Vedic teachings, I'd recommend exploring our verse collection for specific insights. Each verse comes with simple explanations and real-life applications. Is there a particular life situation you're facing where you'd like spiritual guidance?";
  };

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateAIResponse(message);
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-800">AI Spiritual Assistant</h1>
          </div>
          <p className="text-gray-600">Ask questions about verses, get personalized guidance, and explore ancient wisdom</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-orange-500 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-orange-100' : 'text-gray-500'}`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="border-t p-4">
            <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="px-3 py-2 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about verses, spiritual guidance, or life situations..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;