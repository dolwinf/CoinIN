import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  image: {
    height: "70px",
    width: "70px",
    margin: "auto",
  },
  cardBackground: {
    background: "#f2f9ff",
  },
});

const Coins = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={4} xl={3} className="zoom">
        <Card className={classes.cardBackground}>
          <Typography>
            <CardContent>{props.item.id}</CardContent>
            <CardMedia image={props.item.logo_url} className={classes.image} />
            <CardContent>{props.item.name}</CardContent>
          </Typography>
        </Card>
      </Grid>
    </>
  );
};

export default Coins;
