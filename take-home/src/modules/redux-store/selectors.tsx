export const pageNumberSelector = (state: any) =>
  state.pokemon.criteria.pageNumber;
export const searchCriteriaSelector = (state: any) => state.pokemon.criteria;
export const totalCountSelector = (state: any) => state.pokemon.totalCount;

export const searchSelector = (state: any) => state.search;

export const setFilter = (response: any) =>
  response.data.map((e: any) => e.name);
export const typeFilter = (response: any) => response.data;
export const raritiesFilter = (response: any) => response.data;

export const pokemonSelector = (state: any) => state.pokemon.pokemonList;

export const cartSelector = (state: any) =>
  state.cart ? Object.keys(state.cart).map((key) => state.cart[key]) : [];
