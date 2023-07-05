import { POKEMON } from "./actionType";
import axios from "axios";

export function pokemonFetchSuccess(payload:object) {
  return {
    type: POKEMON,
    payload,
  };
}

export function getPokemon() {
  return async (dispatch:Function, getState:any) => {
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