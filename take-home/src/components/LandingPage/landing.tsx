import "./landing.css";
// import img from "../components/images/pokemon.jpg";

import * as React from "react";
import {
  Grid,
  Pagination
} from "@mui/material";
import { NavBar } from "../Navbar/navbar";
import {
  getPokemonList,
  getRaritiesList,
  getSetList,
  getTypeList,
  updatePageNumber,
} from "../../modules/redux-store/action";
import { PAGE_SIZE } from "../../modules/constants";
// import { Pokemon, SearchCriteria, SearchType } from "../modules/model";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCriteriaSelector,
  totalCountSelector,
} from "../../modules/redux-store/selectors";
import { Body } from "../Home/body";
import { Cart } from "../Cart/cart";

const Landing = () => {
  // const cart = useSelector(cartSelector);
  const criteria = useSelector(searchCriteriaSelector);

  React.useEffect(() => {
    dispatch(getPokemonList(criteria));
    // eslint-disable-next-line
  }, [criteria]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPokemonList(criteria));
    dispatch(getSetList());
    dispatch(getTypeList());
    dispatch(getRaritiesList());
    // eslint-disable-next-line
  }, []);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const totalCount = useSelector(totalCountSelector);
  const calculateCount = Math.floor(totalCount ? totalCount / PAGE_SIZE : 0);
  return (
    <Grid className="homepage" item xs={12}>
      <Grid container item xs={11} style={{ margin: "auto" }}>
        <NavBar toggleDrawer={() => setShowDrawer(!showDrawer)} />
        <Body />
        <Grid container className="pagination">
          <Pagination
            count={calculateCount}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => {
              dispatch(updatePageNumber(value));
            }}
          />
        </Grid>
        <Cart
          show={showDrawer}
          toggleHandler={() => {
            setShowDrawer(!showDrawer);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Landing;
