import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cards, Chart, StatePicker } from '../../components';

import { fetchDataBrazil } from '../../api';

import styles from './Home.module.css';
import coronaImage from '../../assets/corona.png';

const Home = () => {
  const [dataBr, setDataBr] = useState({});
  const location = useLocation();

  const dataUfDefault = [{
    uf: "",
    ufConfirmed: 0,
    ufRecovered: 0,
    ufDeaths: 0,
    ufDate: 0,
  }]
  
  useEffect(() => {
    const fetchAPI = async () => {
      setDataBr(await fetchDataBrazil());
    }
    fetchAPI();
  }, [])

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards brData={dataBr} ufData={dataUfDefault} currentUrl={location}/>
      <StatePicker />
      <Chart brData={dataBr} ufData={dataUfDefault} currentUrl={location}/>
    </div> 
  )
}

export default Home;