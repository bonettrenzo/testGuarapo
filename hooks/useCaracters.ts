import { useState, useEffect } from "react";
import { BASE_URL } from "@/constants/const";
import { Character } from "@/types/type";
import axios from "axios";

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visible, setVisible] = useState(2);
  const [filters, setFilters] = useState({
    name: "", 
    species: "", 
    gender: "", 
    status: "", 
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/character`)
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const handleLoadMore = () => {
    setVisible(prev => prev + 2);
  };

  const filteredCharacters = characters.filter(character => {
    return (
      character.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      character.species.toLowerCase().includes(filters.species.toLowerCase()) &&
      character.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
      character.status.toLowerCase().includes(filters.status.toLowerCase())
    );
  });

  return {
    visibleCharacters: filteredCharacters.slice(0, visible),
    handleLoadMore,
    filters, 
    setFilters,
  };
};

export default useCharacters;
