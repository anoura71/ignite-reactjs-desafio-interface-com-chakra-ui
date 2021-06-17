import { City } from './City';

export interface Continent {
  id: number;
  name: string;
  total_countries: number;
  total_languages: number;
  imageUrl: string;
  bannerUrl: string;
  about: string;
  description: string;
  cities: City[];
}
