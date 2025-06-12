import axios from "axios";

const consumirPokemon = async (id) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => resp.data);

const obtenerArregloNumerico = (longitud) => {
  const vector = [];
  for (let i = 0; i < longitud; i++) {
    vector[i] = obtenerAleatorio(1, 640);
  }
  return vector;
};
const obtenerObjetoPokemon = async (id) => {
  const data = await consumirPokemon(id);
  // console.log(data.name)
  return {
    nombre: data.name,
    id: data.id,
  };
};

const obtenerArregloPokemo = async (array) => {
  const vector = [];
  for (let i of array) {
    const objetoPokemon = await obtenerObjetoPokemon(i);
    vector.push(objetoPokemon);
  }
  return vector;
};

const obtenerOpciones = async (longitud) => {
  const vector = obtenerArregloNumerico(longitud);
  const vectorObjetos = await obtenerArregloPokemo(vector);
  return vectorObjetos;
};

const obtenerAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1));

//Fachada
export const consumirPokemonFachada = async (id) => await consumirPokemon(id);

export const obtenerOpcionesFachada = async (longitud) =>
  await obtenerOpciones(longitud);

export const obtenerAleatorioFachada = (min, max) => obtenerAleatorio(min, max);
