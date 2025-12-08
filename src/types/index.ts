export interface Verse {
  id: number;
  original: string;
  translation: string;
  explanation: string;
  application: string;
  scripture: string;
  chapter: string;
  category: string;
  tags: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}