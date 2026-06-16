export type AuctionStatus = 'active' | 'upcoming' | 'ended';
export type Fuel = 'Gasolina' | 'Diésel' | 'Híbrido' | 'Eléctrico';
export type Transmission = 'Automática' | 'Manual';
export type Condition = 'Nuevo' | 'Usado';
export type Category =
  | 'Deportivo'
  | 'SUV'
  | 'Sedán'
  | 'Clásico'
  | 'Lujo'
  | 'Económico'
  | 'Eléctrico';

export interface Auction {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  /** Headline shown on the card, e.g. "Porsche 911 Carrera S" */
  title: string;
  image: string;
  gallery?: string[];
  basePrice: number;
  currentBid: number;
  bids: number;
  /** ISO date string for when the auction closes */
  endsAt: string;
  status: AuctionStatus;
  fuel: Fuel;
  transmission: Transmission;
  condition: Condition;
  mileageKm: number;
  location: string;
  category: Category;
  /** Exclusive CarsHub Deluxe lot */
  deluxe?: boolean;
}
