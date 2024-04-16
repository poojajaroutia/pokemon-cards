import { combineReducers } from "redux";
import { PAGE_SIZE } from "../constants";
import {
  Action,
  CartModel,
  Pokemon,
  SearchBar,
  SearchCriteria,
} from "../model";

const initialPokemonView = {
  criteria: {
    pageNumber: 1,
    pageSize: PAGE_SIZE,
  } as SearchCriteria,
  pokemonList: [] as Array<Pokemon>,
  totalCount: 0 as number,
};

const pokemonReducer = (state = initialPokemonView, action: Action) => {
  const { type, payload } = action;
  console.log("pokemonReducer: ", type, payload);
  switch (type) {
    case "UPDATE_POKEMON":
      return {
        ...state,
        criteria: payload.criteria,
        pokemonList: payload.pokemonList,
        totalCount: payload.totalCount,
      };
    case "UPDATE_SET":
      return {
        ...state,
        criteria: { ...state.criteria, set: payload } as SearchCriteria,
      };

    case "UPDATE_RARITY":
      return {
        ...state,
        criteria: { ...state.criteria, rarity: payload } as SearchCriteria,
      };
    case "UPDATE_TYPE":
      return {
        ...state,
        criteria: { ...state.criteria, type: payload } as SearchCriteria,
      };
    case "UPDATE_NAME":
      return {
        ...state,
        criteria: { ...state.criteria, name: payload } as SearchCriteria,
      };
    case "UPDATE_PAGE_NUMBER":
      return {
        ...state,
        criteria: { ...state.criteria, pageNumber: payload } as SearchCriteria,
      };
    default:
      return state;
  }
};
const initialSearchData = {
  rarityList: [],
  setList: [],
  typeList: [],
} as SearchBar;
const searchReducer = (
  state = initialSearchData,
  action: Action
): SearchBar => {
  console.log("searchReducer", action.type, action.payload);
  switch (action.type) {
    case "UPDATE_SET_LIST":
      return { ...state, setList: action.payload };

    case "UPDATE_RARITY_LIST":
      return { ...state, rarityList: action.payload };

    case "UPDATE_TYPE_LIST":
      return { ...state, typeList: action.payload };
    default:
      return state;
  }
};

const initCart = {} as CartModel;
const cartReducer = (state: CartModel = initCart, action: Action) => {
  console.log("cartReducer", action.type, action.payload);
  const {  payload } = action;
  switch (action.type) {
    case "ADD_POKEMON_TO_CART":
      if (payload.id in state) {
        return {
          ...state,
          [payload.id]: {
            ...payload,
            cartCount: state[payload.id].cartCount + 1,
          },
        };
      } else {
        return { ...state, [payload.id]: { ...payload, cartCount: 1 } };
      }
    case "REDUCE_POKEMON_FROM_CART":
      if (payload.id in state) {
        const new_state: CartModel = {
          ...state,
          [payload.id]: {
            ...payload,
            cartCount: state[payload.id].cartCount - 1,
          },
        };
        if (new_state[payload.id].cartCount <= 0) {
          delete new_state[payload.id];
        }
        return new_state;
      } else return state;
    case "REMOVE_POKEMON":
      return {};
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  search: searchReducer,
  pokemon: pokemonReducer,
  cart: cartReducer,
});
