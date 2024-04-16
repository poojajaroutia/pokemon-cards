import { Pokemon, SearchCriteria, SearchType } from "../model";
import { Service } from "../service";
import { raritiesFilter, setFilter, typeFilter } from "./selectors";
// import { useToasts } from "react-toast-notifications";

const servoice = new Service();
export const depositMoney = (amount: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
export const getPokemonList = (criteria: SearchCriteria) => {
  return async (dispatch: any) => {
    const resp = await servoice.getPokemonByCriteria(criteria);
    dispatch({
      type: "UPDATE_POKEMON",
      payload: {
        criteria,
        pokemonList: resp.data,
        totalCount: resp.totalCount,
      },
    });
  };
};
export const getSetList = () => {
  return async (dispatch: any) => {
    const resp = await servoice.getAllBy(SearchType.sets);
    dispatch({
      type: "UPDATE_SET_LIST",
      payload: setFilter(resp),
    });
  };
};
export const getTypeList = () => {
  return async (dispatch: any) => {
    const resp = await servoice.getAllBy(SearchType.types);
    dispatch({
      type: "UPDATE_TYPE_LIST",
      payload: typeFilter(resp),
    });
  };
};
export const getRaritiesList = () => {
  return async (dispatch: any) => {
    const resp = await servoice.getAllBy(SearchType.rarities);
    dispatch({
      type: "UPDATE_RARITY_LIST",
      payload: raritiesFilter(resp),
    });
  };
};
export const updateSerchCriteriaSet = (name: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: "UPDATE_SET",
      payload: name,
    });
  };
};
export const updateSerchCriteriaRarity = (name: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: "UPDATE_RARITY",
      payload: name,
    });
  };
};
export const updateSerchCriteriaType = (name: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: "UPDATE_TYPE",
      payload: name,
    });
  };
};
export const updateSerchCriteriaName = (name: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: "UPDATE_NAME",
      payload: name,
    });
  };
};
export const updatePageNumber = (pageNumber: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: "UPDATE_PAGE_NUMBER",
      payload: pageNumber,
    });
  };
};
export const addPokemonToCart = (pokemon: Pokemon) => {
  return async (dispatch: any) => {
    dispatch({
      type: "ADD_POKEMON_TO_CART",
      payload: pokemon,
    });
  };
};
export const reducePokemonFromCart = (pokemon: Pokemon) => {
  return async (dispatch: any) => {
    dispatch({
      type: "REDUCE_POKEMON_FROM_CART",
      payload: pokemon,
    });
  };
};
export const clearAllPokemonFromCart = () => {
  return async (dispatch: any) => {
    dispatch({
      type: "REMOVE_POKEMON",
      payload: {},
    });
  };
};
