import axios from "axios";

const URL_BASE = "http://localhost:8081/api/matricula/v1/estudiantes";

const consumirTodosEstudiantes = async () =>
  axios.get(URL_BASE).then((resp) => resp.data);

const consumirEstudiantePorId = async (id) =>
  axios.get(`${URL_BASE + "/consultar"}/${id}`).then((resp) => resp.data);

// Fachada
export const consumirTodosEstudiantesFachada = async () =>
  await consumirTodosEstudiantes();

export const consumirEstudiantePorIdFachada = async (id) =>
  await consumirEstudiantePorId(id);
