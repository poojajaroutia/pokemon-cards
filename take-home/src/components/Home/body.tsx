import { Button,  Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../../modules/model";
import { pokemonSelector } from "../../modules/redux-store/selectors";

import "./body.css";
import { addPokemonToCart } from "../../modules/redux-store/action";
import { useToasts } from "react-toast-notifications";
// type Prop = {};
export const  Body = () => {
  const pokemonList = useSelector(pokemonSelector);
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  return (
    <Grid container item xs={12} className="body">
      {pokemonList.map((pokemon: Pokemon) => (
        <Grid className="pokemonimage" item xs={12} lg={2} md={3} sm={6}>
          <Grid className="main">
            <img className="imagepokemon" src={pokemon.images.large} alt="pokemon"/>
          </Grid>
          <Grid className="text-box" item xs={10}>
            <Grid className="pokemon-name">{pokemon.name}</Grid>
            <Grid item xs={8} className="pokemon-price">
              <span className="price">
                $
                {pokemon.cardmarket.prices.averageSellPrice
                  ? pokemon.cardmarket.prices.averageSellPrice
                  : "None"}
              </span>
              <span className="quantity">{pokemon.set.total} cards</span>
            </Grid>
            <Button
              className="add-cart-button"
              onClick={() => {
                dispatch(addPokemonToCart(pokemon));
                addToast(`Pokemon added : ${pokemon.name} `, {
                  appearance: "success",
                });
              }}
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
