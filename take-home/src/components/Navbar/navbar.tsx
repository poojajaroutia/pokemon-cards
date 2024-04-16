import {
    Grid,
    IconButton,
    InputBase,
    Paper,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import "./navbar.css";
  import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
  import { DropDown } from "../DropDown/dropdown";
  import { SearchBar, SearchType } from "../../modules/model";
  import { useDispatch, useSelector } from "react-redux";
  import {
    searchSelector
  } from "../../modules/redux-store/selectors";
  import React from "react";
  import {
    updateSerchCriteriaName,
  } from "../../modules/redux-store/action";
  
  type Prop = {
    toggleDrawer: () => void;
  };
  export const NavBar = (prop: Prop) => {
    const search = useSelector<any, SearchBar>(searchSelector);
    const [name, setName] = React.useState("");
    const dispatch = useDispatch();
    return (
      <Grid container className="heading-bar-container">
        <Grid container className="search-bar-top" item xs={12}>
          <Grid className="heading" item sm={5} xs={12} lg={3} md={4}>
            Pokemon market
          </Grid>
          <Grid
            container
            className="right-panel"
            item
            sm={6}
            xs={12}
            lg={8}
            md={7}
          >
            <Paper className="search-button">
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search By Name"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(updateSerchCriteriaName(name));
                  }
                }}
              />
            </Paper>
          </Grid>
          <Grid
            container
            className="cart-button-container header-icon"
            item
            xs={1}
            sm={1}
            lg={1}
            md={1}
          >
            <Paper
              className="cart-button"
              onClick={() => {
                prop.toggleDrawer();
              }}
            >
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <LocalMallSharpIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          className="search-bar-bottom"
          item
          xs={12}
          sm={12}
          lg={12}
        >
          <Grid
            className="heading bottom-heading"
            item
            xs={12}
            sm={12}
            lg={8}
            md={6}
          >
            Choose card
          </Grid>
          <Grid
            container
            className="right-panel"
            item
            sm={12}
            xs={12}
            lg={4}
            md={6}
          >
            <Grid item xs={4}>
              <DropDown
                type={SearchType.sets}
                list={search && search["setList"] ? search.setList : []}
              />
            </Grid>
            <Grid item xs={4}>
              <DropDown
                type={SearchType.rarities}
                list={search && search["rarityList"] ? search.rarityList : []}
              />
            </Grid>
            <Grid item xs={4}>
              <DropDown
                type={SearchType.types}
                list={search && search["rarityList"] ? search.typeList : []}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  