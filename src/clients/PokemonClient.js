import axios from "axios";

const consumirPokemon = async (id) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => resp.data);

//Fachada
export const consumirPokemonFachada = async (id) => await consumirPokemon(id);
