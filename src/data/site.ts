import type { Category } from '@/lib/types';

export const siteConfig = {
  name: 'CarsHub',
  tagline: 'Subastas de autos, sin fricción.',
  description:
    'La plataforma peruana de subastas de vehículos — desde económicos hasta deportivos y alta gama. Puja con confianza, transparencia total.',
  email: 'hola@carshub.pe',
  phone: '+51 1 700 4500',
  address: 'Av. Javier Prado Este 1234, San Isidro, Lima',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
  },
};

export const navLinks = [
  { label: 'Subastas', href: '/auctions' },
  { label: 'Deluxe', href: '/deluxe' },
  { label: 'Acerca de', href: '/about' },
  { label: 'Contacto', href: '/contact' },
];

interface CategoryCard {
  name: Category;
  href: string;
  icon: string; // inline svg path data
  blurb: string;
}

export const categories: CategoryCard[] = [
  {
    name: 'Deportivo',
    href: '/auctions?cat=Deportivo',
    blurb: 'Adrenalina pura',
    icon: 'M5 16l1.5-4.5A2 2 0 018.4 10h7.2a2 2 0 011.9 1.5L19 16m-14 0h14m-14 0v2a1 1 0 001 1h1a1 1 0 001-1v-1m10 1v1a1 1 0 001 1h1a1 1 0 001-1v-2M7.5 16v.01M16.5 16v.01',
  },
  {
    name: 'SUV',
    href: '/auctions?cat=SUV',
    blurb: 'Espacio y poder',
    icon: 'M4 17h16M4 17a1 1 0 01-1-1v-3l2-5a2 2 0 011.9-1.4h10.2A2 2 0 0119 8l2 5v3a1 1 0 01-1 1M7 17v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1m13 0v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1',
  },
  {
    name: 'Sedán',
    href: '/auctions?cat=Sedán',
    blurb: 'Confort diario',
    icon: 'M3 13l2-5a2 2 0 011.9-1.3h10.2A2 2 0 0119 8l2 5m-18 0h18m-18 0v3a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-3',
  },
  {
    name: 'Lujo',
    href: '/auctions?cat=Lujo',
    blurb: 'Alta gama',
    icon: 'M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z',
  },
  {
    name: 'Clásico',
    href: '/auctions?cat=Clásico',
    blurb: 'Íconos atemporales',
    icon: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    name: 'Eléctrico',
    href: '/auctions?cat=Eléctrico',
    blurb: 'Cero emisiones',
    icon: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  },
];

export const testimonials = [
  {
    name: 'Mariana Quispe',
    role: 'Compradora — Lima',
    quote:
      'Adjudiqué mi Mazda CX-5 en menos de 48 horas. El proceso fue transparente y el historial del vehículo, impecable.',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
  },
  {
    name: 'Diego Ferrand',
    role: 'Miembro Deluxe — Arequipa',
    quote:
      'La puja automática me dejó competir por un 911 sin estar pegado a la pantalla. El asesor personalizado hizo la diferencia.',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
  },
  {
    name: 'Valeria Ríos',
    role: 'Vendedora — Trujillo',
    quote:
      'Vendí mi auto por encima del precio de mercado. La inspección virtual 360° le dio confianza total a los compradores.',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
  },
];

export const stats = [
  { value: '12 400+', label: 'Autos adjudicados' },
  { value: 'US$ 480M', label: 'En transacciones' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte Deluxe' },
];
