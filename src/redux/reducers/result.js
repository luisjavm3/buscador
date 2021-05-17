import { RESET_RESULT, SEARCH_RESULT } from '../actionTypes';
import testData from '../../testData';

export default function result(state = null, { type, payload }) {
  switch (type) {
    case SEARCH_RESULT:
      const searchTerm = payload.searchTerm;

      state = {
        usuarios: [],
        fuentes: [],
        conciliaciones: [],
        tableros: [],
      };

      state.usuarios = searchUsuarios(testData.usuarios, searchTerm);
      state.fuentes = searchFuentes(testData.fuentes, searchTerm);
      state.conciliaciones = searchConciliaciones(
        testData.conciliaciones,
        searchTerm
      );
      state.tableros = searchTableros(testData.tableros, searchTerm);

      return state;

    case RESET_RESULT:
      return (state = null);

    default:
      return state;
  }
}

export const searchUsuarios = (arr, searchTerm) => {
  searchTerm = String(searchTerm);

  return arr.filter(
    (usuario) =>
      String(usuario._id).includes(searchTerm) ||
      String(usuario.isActive).includes(searchTerm) ||
      String(usuario.age).includes(searchTerm) ||
      String(usuario.name.firstName).includes(searchTerm) ||
      String(usuario.name.lastName).includes(searchTerm) ||
      String(usuario.gender).includes(searchTerm) ||
      String(usuario.company).includes(searchTerm) ||
      String(usuario.email).includes(searchTerm) ||
      String(usuario.phone).includes(searchTerm) ||
      String(usuario.address).includes(searchTerm) ||
      String(usuario.createdAt).includes(searchTerm) ||
      String(usuario.tags).includes(searchTerm)
  );
};

export const searchFuentes = (arr, searchTerm) => {
  searchTerm = String(searchTerm);

  return arr.filter(
    (fuente) =>
      String(fuente._id).includes(searchTerm) ||
      String(fuente.isActive).includes(searchTerm) ||
      String(fuente.name).includes(searchTerm) ||
      String(fuente.company).includes(searchTerm) ||
      String(fuente.timestamp.createdAt).includes(searchTerm) ||
      String(fuente.timestamp.updateAt).includes(searchTerm) ||
      String(fuente.description).includes(searchTerm) ||
      String(fuente.tags).includes(searchTerm)
  );
};

export const searchConciliaciones = (arr, searchTerm) => {
  searchTerm = String(searchTerm);

  return arr.filter(
    (conciliacion) =>
      String(conciliacion._id).includes(searchTerm) ||
      String(conciliacion.isActive).includes(searchTerm) ||
      String(conciliacion.conciliationName).includes(searchTerm) ||
      String(conciliacion.sourceA).includes(searchTerm) ||
      String(conciliacion.sourceB).includes(searchTerm) ||
      String(conciliacion.balance).includes(searchTerm) ||
      String(conciliacion.timestamp.createdAt).includes(searchTerm) ||
      String(conciliacion.timestamp.updateAt).includes(searchTerm) ||
      String(conciliacion.description).includes(searchTerm) ||
      String(conciliacion.tags).includes(searchTerm)
  );
};

export const searchTableros = (arr, searchTerm) => {
  searchTerm = String(searchTerm);

  const visualTypeOrVisualsMatch = (tablero) => {
    try {
      tablero.visualType.forEach((item) => {
        if (String(item.name).includes(searchTerm)) throw Error('Encontrado');
      });

      tablero.visuals.forEach((item) => {
        if (
          String(item.name).includes(searchTerm) ||
          String(item.type).includes(searchTerm)
        )
          throw Error('Encontrado');
      });
    } catch (error) {
      return true;
    }
  };

  return arr.filter(
    (tablero) =>
      String(tablero._id).includes(searchTerm) ||
      String(tablero.isActive).includes(searchTerm) ||
      String(tablero.dashboardName).includes(searchTerm) ||
      visualTypeOrVisualsMatch(tablero) ||
      String(tablero.timestamp.createdAt).includes(searchTerm) ||
      String(tablero.timestamp.updateAt).includes(searchTerm) ||
      String(tablero.description).includes(searchTerm) ||
      String(tablero.tags).includes(searchTerm)
  );
};
