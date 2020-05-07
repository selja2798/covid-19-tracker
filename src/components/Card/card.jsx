import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./card.module.css";
import CountUp from "react-countup";
import cn from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Positif
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Jumlah orang yang terinfeksi virus COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sembuh
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Jumlah pasien yang sembuh dari virus COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Meninggal
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Jumlah pasien yang meninggal akibat COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

// {
//   confirmed, recovered, deaths, lastUpdate;
// }

// const [totalCard, setTotalCard] = useState([
//   {
//     title: "Infected",
//     body2: "Number of active cases of COVID-19",
//     dataNumber: null,
//     dataDate: null,
//     id: 1,
//   },
//   {
//     title: "Recovered",
//     body2: "Number of recoveries from COVID-19",
//     dataNumber: null,
//     dataDate: null,
//     id: 2,
//   },
//   {
//     title: "Deaths",
//     body2: "Number of deaths caused by COVID-19",
//     dataNumber: null,
//     dataDate: null,
//     id: 3,
//   },
// ]);
