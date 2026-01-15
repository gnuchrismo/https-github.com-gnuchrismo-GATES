
export interface Researcher {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Project {
  id: string;
  status: 'En curso' | 'Finalizado';
  title: string;
  summary: string;
  results?: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface ResearchEvent {
  id: string;
  date: string;
  type: string;
  title: string;
  description: string;
}

// Added missing Book interface
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
}

// Added missing Essay interface
export interface Essay {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}