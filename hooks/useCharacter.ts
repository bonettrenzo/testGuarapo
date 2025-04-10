import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/const";
import { Character, EpisodeInfo } from "@/types/type";



const useCharacter = (id: string | number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    axios.get(`${BASE_URL}/character/${id}`)
      .then(async (res) => {
        const characterData: Character = res.data;
        setCharacter(characterData);

        
        const episodeUrls = characterData.episode.slice(0, 3); 
        const episodeRequests = episodeUrls.map((url) => axios.get(url));
        const episodeResponses = await Promise.all(episodeRequests);

        const episodeData = episodeResponses.map((response) => ({
          name: response.data.name,
          air_date: response.data.air_date,
          episode: response.data.episode,
        }));

        setEpisodes(episodeData);
      })
      .catch((err) => setError("No se pudo cargar el personaje"))
      .finally(() => setLoading(false));
  }, [id]);

  return { character, episodes, loading, error };
};

export default useCharacter;
