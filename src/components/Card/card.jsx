import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./card.module.css";
import CountUp from "react-countup";
import cn from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [sections, setSections] = useState([
    {
      title: "Infected",
      body2: "Number of active cases of COVID-19",
      dataNumber: {},
      dataDate: "",
    },
    {
      title: "Recovered",
      body2: "Number of recoveries from COVID-19",
      dataNumber: {},
      dataDate: "",
    },
    {
      title: "Deaths",
      body2: "Number of deaths caused by COVID-19",
      dataNumber: {},
      dataDate: "",
    },
  ]);

  // useEffect(() => {
  //   for (const section of sections) {
  //     if (sections.hasOwnProperty(section)) {
  //       setSections({
  //         dataNumber: confirmed,
  //         dataDate: lastUpdate,
  //       });
  //     }
  //   }

  //   return () => {};
  // }, []);

  if (!confirmed) {
    return "Loading...";
  }

  console.log(sections);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {sections.map(({ title, dataNumber, dataDate, body2 }) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cn(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={dataNumber}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(dataDate).toDateString()}
              </Typography>
              <Typography variant="body2">{body2}</Typography>
            </CardContent>
          </Grid>
        ))}
        {/* <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cn(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
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
              Number of recoveries from COVID-19
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
              Deaths
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
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Cards;
