import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/const";
import { Character } from "@/types/type";

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    axios.get(`${BASE_URL}/character`)
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const handleLoadMore = () => {
    setVisible(prev => prev + 2);
  };

  return {
    visibleCharacters: characters.slice(0, visible),
    handleLoadMore
  };
};

export default useCharacters
