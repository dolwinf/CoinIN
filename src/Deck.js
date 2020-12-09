import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Coins from "./Coins";

const useStyles = makeStyles({
  deck: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  logo: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "2.5em",
  },

  navBar: {
    marginLeft: "1.3em",
  },
});

const API_KEY = "5f674b2009a23dc61ec3310ac973aa44";
const currencies =
  "BTC,ETH,XRP,USDT,LTC,BCH,LINK,ADA,DOT,BNB,XLM,BSV,USDC,EOS,XMR,WBTC,TRX,XEM,HEX,CDAI,XTZ,OKB,CRO,FIL,LEO,NEO,ATOM,VET,DAI,AAVE,DASH,HT,UNI,CEL,IOT,WAVES,YFI,ZEC,THETA,ETC,SNX,BUSD,CETH,COMP,CUSDC,BTCV2,OMG,MKR,KSM,FTXTOKEN,UMA";

const Deck = () => {
  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=${currencies}&interval=1d,30d`
      )
        .then((response) => response.json())
        .then((data) => {
          setcurrencyData(data);
          console.log(data);
        });
    };

    getData();
  }, []);
  const [currencyData, setcurrencyData] = useState([]);
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Typography className={classes.logo}>Coin/IN</Typography>
        </Toolbar>
      </AppBar>
      {currencyData ? (
        <Grid container spacing={4} className={classes.deck}>
          {currencyData.map((item) => (
            <Coins item={item} key={item.id} />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Deck;
