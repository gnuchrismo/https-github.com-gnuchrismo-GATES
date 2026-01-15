
import { Researcher, Project, BlogPost, ResearchEvent } from './types';

export const LOGO_URL = "https://raw.githubusercontent.com/username/repo/main/logo.png"; // Placeholder for the provided image link in environment

export const TEAM: Researcher[] = [
  {
    id: '1',
    name: 'Dr. Investigador Principal',
    role: 'Director de Investigación',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Especialista en biotecnología aplicada con más de 15 años de experiencia en el altiplano boliviano.'
  },
  {
    id: '2',
    name: 'Msc. Elena Miranda',
    role: 'Coordinadora de Desarrollo Social',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Enfocada en el impacto de la tecnología en comunidades rurales.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    status: 'En curso',
    title: 'Sistemas de Riego Inteligente para el Altiplano',
    summary: 'Implementación de sensores de humedad y energía solar para optimizar cultivos de quinua.',
  },
  {
    id: 'p2',
    status: 'Finalizado',
    title: 'Análisis de Aguas en la Cuenca del Amazonas',
    summary: 'Estudio exhaustivo sobre microplásticos en afluentes bolivianos.',
    results: 'Reducción del 15% de vertidos detectada tras políticas locales.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    date: '15 de Mayo, 2024',
    title: 'El futuro de la Litio-dependencia',
    excerpt: '¿Cómo puede Bolivia posicionarse como líder científico en la cadena de valor?',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop'
  }
];

export const EVENTS: ResearchEvent[] = [
  {
    id: 'e1',
    date: '20 Junio, 2024',
    type: 'Seminario',
    title: 'Biotecnología y Soberanía Alimentaria',
    description: 'Encuentro virtual con expertos internacionales.'
  }
];
