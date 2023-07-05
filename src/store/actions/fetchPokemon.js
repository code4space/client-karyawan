import { POKEMON } from "./actionType";
import axios from "axios";

export function pokemonFetchSuccess(payload) {
  return {
    type: POKEMON,
    payload,
  };
}

export function getPokemon() {
  return async (dispatch, getState) => {
    try {
      const response = await axios({
        url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        method: 'GET'
      })
      dispatch(pokemonFetchSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}