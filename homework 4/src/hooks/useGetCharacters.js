import { useState, useEffect } from "react";

const URL = "https://api.disneyapi.dev/character";


const useGetCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(`${URL}?page=${page}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const allData = await response.json();
        setCharacters(allData.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters()
  }, [page]);

  return { characters, isLoading, isError };
};
export default useGetCharacters;