import { Button, Drawer, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../modules/redux-store/selectors";
import "./cart.css";
import cross from "../../components/images/cross.png";
import { Pokemon } from "../../modules/model";
import {
  addPokemonToCart,
  clearAllPokemonFromCart,
  reducePokemonFromCart,
} from "../../modules/redux-store/action";

type Prop = {
  show: boolean;
  toggleHandler: () => void;
};
export const Cart = ({ show, toggleHandler }: Prop) => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const totalPrise = cart
    .map((each) => each.cartCount * each.cardmarket.prices.averageSellPrice)
    .reduce((accumulator, current) => accumulator + current, 0);
  return (
    <Drawer
      anchor="right"
      open={show}
      onClose={toggleHandler}
      className="drawer-container"
    >
      <Grid container className="cart-container">
        <Grid container item>
          <Grid className="left-pane" item lg={9} xs={9} sm={9}>
            <div className="cart-label">Cart</div>
            <div
              className="clear-button"
              onClick={() => {
                dispatch(clearAllPokemonFromCart());
              }}
            >
              Clear all
            </div>
          </Grid>
          <Grid className="right-pane" item lg={3} xs={3} sm={3}>
            <img
              className="cross-button"
              src={cross}
              alt=""
              onClick={toggleHandler}
            />
          </Grid>
        </Grid>
        <Grid container className="label-heading holder upper-holder">
          <Grid className="start">Item</Grid>
          <Grid className="mid">Qty</Grid>
          <Grid className="end">Price</Grid>
        </Grid>
        {cart.map((each: Pokemon) => (
          <Grid key={each.id} container className="cart-items">
            <Grid container className="holder upper-holder">
              <Grid className="start">
                <img src={each.images.small} alt="" />
              </Grid>
              <Grid className="mid">
                <div>{each.name}</div>
                <div className="total-price">
                  ${each.cardmarket.prices.averageSellPrice * each.cartCount}
                </div>
              </Grid>
              <Grid className="end">
                $ {each.cardmarket.prices.averageSellPrice}
              </Grid>
            </Grid>
            <Grid container className="holder">
              <Grid
                className="start change-button"
                onClick={() => dispatch(reducePokemonFromCart(each))}
              >
                <div>-</div>
              </Grid>
              <Grid className="mid item-count change-button">
                <div>{each.cartCount}</div>
              </Grid>
              <Grid
                className="end change-button"
                onClick={() => dispatch(addPokemonToCart(each))}
              >
                <div>+</div>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid container className="amount-price-set">
          <Grid item className="amount-label" lg={6}>
            Total card amount
          </Grid>
          <Grid item className="total-item-count" lg={6}>
            {cart.length}
          </Grid>
        </Grid>
        <Grid container className="amount-price-set">
          <Grid item className="amount-label" lg={6}>
            Total price
          </Grid>
          <Grid item className="total-item-count" lg={6}>
            ${totalPrise}
          </Grid>
        </Grid>
        <Grid className="payment-button">
          <Button>Continue to Payment</Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};
