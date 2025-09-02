export interface CharacterLocation {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResponse {
  info: Info;
  results: Character[];
}

export interface LocationsResponse {
  info: Info;
  results: Location[];
}

export interface EpisodesResponse {
  info: Info;
  results: Episode[];
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
  episode: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  episode: string[];
  created: string;
  url: string;
  image: string;
}

interface Weight {
  imperial: string;
  metric: string;
}

interface CatBreed {
  weight: Weight;
  id: string;
  name: string;
  temperament: string;
  description: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
}

export interface CatCard {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: Array<CatBreed>;
}
