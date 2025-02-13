import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharactersApi = async (page = 1, query = "") => {
  const response = await axios.get(
    `${BASE_URL}/?page=${page}&name=${encodeURIComponent(query)}`
  );
  return response.data;
};

export const fetchSingleCharacterApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
