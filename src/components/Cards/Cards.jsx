import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ brData, currentUrl, ufData }) => {
  const { pathname } = currentUrl;
  
  if (!ufData[0] || !brData) {
    return true;
  }

  const { brConfirmed, brRecovered, brDeaths, brDate } = brData;
  const { ufConfirmed, ufRecovered, ufDeaths, ufDate } = ufData[0];

  const cardsBrazil = (
    brConfirmed ? 
      <div className={styles.container}>
        <Grid container spacing={1} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Infectados</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={brConfirmed} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(brDate).toLocaleString()}</Typography>
              <Typography variant="body2">Número de casos ativos do COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={brRecovered} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(brDate).toLocaleString()}</Typography>
              <Typography variant="body2">Número de recuperações do COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Mortes</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={brDeaths} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(brDate).toLocaleString()}</Typography>
              <Typography variant="body2">Número de mortes causada pelo COVID-19</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    : null
  );

  const cardsState = (
    ufConfirmed ? 
      <div className={styles.container}>
        <Grid container spacing={1} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Infectados</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={ufConfirmed} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date().toLocaleString()}</Typography>
              <Typography variant="body2">Número de casos ativos do COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={ufRecovered} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date().toLocaleString()}</Typography>
              <Typography variant="body2">Número de recuperações do COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Mortes</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={ufDeaths} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(ufDate).toLocaleString()}</Typography>
              <Typography variant="body2">Número de mortes causada pelo COVID-19</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    : null
  );

  return (
    <>
      {pathname === "/estados" ? cardsState : cardsBrazil}
    </>
  )
}

export default Cards;