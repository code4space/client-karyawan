import { combineReducers } from "redux";
import PokemonReducer from "./pokemon";

const rootReducer = combineReducers({
    PokemonReducer,
})

export type RootState = {
    pokemon: any
}

export default rootReducer