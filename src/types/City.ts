export interface City {
  id: number;
  rank: number;
  cityName: string;
  countryCode: string;
  countryName: string;
  continentId: number;
  arrivals: number;
  rank_change: number;
  growth_pct: number;
  imageUrl: string;
  types: number[];
}
