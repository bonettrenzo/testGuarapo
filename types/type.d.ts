interface CharacterLocation {
    name: string;
    url: string;
  }
  
 export interface Character {
    created: string; 
    episode: string[];
    gender: string; 
    id: number;
    image: string;
    location: CharacterLocation;
    name: string;
    origin: CharacterLocation;
    species: string;
    status: string;
    type: string;
    url: string;
  }

  export type EpisodeInfo = {
    name: string;
    air_date: string;
    episode: string;
  };

  type Filters = {
    name: string;
    species: string;
    gender: string;
    status: string;
  };
  