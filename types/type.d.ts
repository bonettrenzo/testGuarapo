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