/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Grid } from '@material-ui/core';

import { Cards, Chart } from '../../components';
import { fetchStateData } from '../../api';

import styles from './MapDetail.module.css';
// eslint-disable-next-line no-unused-vars
import stylesMap from './stylesMap.css';
import coronaImage from '../../assets/corona.png';

const MapDetail = () => {
  const [dataUf, setDataUf] = useState([]);
  const [stateClick, setStateClick] = useState({});
  const location = useLocation();

  const dataBrazilDefault = {
    brConfirmed: 0, 
    brRecovered: 0, 
    brDeaths: 0, 
    brDate: "",
  }

  useEffect(() => {
    const fetchAPIUF = async () => {
      setDataUf(await fetchStateData(stateClick['uf']));
    }
    fetchAPIUF();
  }, [stateClick])
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID" />
      <Cards brData={dataBrazilDefault} ufData={dataUf} currentUrl={location} />

      <Grid container justify="center">
        <Grid 
          container item 
          justify="space-between"
          alignItems="center" 
          xs={12} md={5} 
        >
          <h1>{stateClick['estado']}</h1>
          <Link to="/">
            <FiChevronLeft size={20} />
            Voltar
          </Link>
        </Grid>

        <Grid
          container item 
          xs={12} md={10}
          justify="space-evenly"
          alignItems="center"
        >
          <ul id="map">
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="crs" estado="rs"><a href="#" id="rs" title="riograndedosul" data-value="Rio Grande do Sul"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="csc" estado="sc"><a href="#" id="sc" title="santacatarina" data-value="Santa Catarina"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cpr" estado="pr"><a href="#" id="pr" title="parana" data-value="Paraná"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="csp" estado="sp"><a href="#" id="sp" title="saopaulo" data-value="São Paulo"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cms" estado="ms"><a href="#" id="ms" title="matogrossodosul" data-value="Mato Grosso do Sul"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="crj" estado="rj"><a href="#" id="rj" title="riodejaneiro" data-value="Rio de Janeiro"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="ces" estado="es"><a href="#" id="es" title="espiritosanto" data-value="Espírito Santo"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cmg" estado="mg"><a href="#" id="mg" title="minasgerais" data-value="Minas Gerais"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cgo" estado="go"><a href="#" id="go" title="goias" data-value="Goiás"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cdf" estado="df"><a href="#" id="df" title="distritofederal" data-value="Distrito Federal"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cba" estado="ba"><a href="#" id="ba" title="bahia" data-value="Bahia"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cmt" estado="mt"><a href="#" id="mt" title="matogrosso" data-value="Mato Grosso"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cro" estado="ro"><a href="#" id="ro" title="rondonia" data-value="Rondônia"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cac" estado="ac"><a href="#" id="ac" title="acre" data-value="Acre"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cam" estado="am"><a href="#" id="am" title="amazonas" data-value="Amazonas"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="crr" estado="rr"><a href="#" id="rr" title="roraima" data-value="Roraima"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cpa" estado="pa"><a href="#" id="pa" title="para" data-value="Pará"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cap" estado="ap"><a href="#" id="ap" title="amapa" data-value="Amapá"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cma" estado="ma"><a href="#" id="ma" title="maranhao" data-value="Maranhão"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cto" estado="to"><a href="#" id="to" title="tocantins" data-value="Tocantins"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cse" estado="se"><a href="#" id="se" title="sergipe" data-value="Sergipe"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cal" estado="al"><a href="#" id="al" title="alagoas" data-value="Alagoas"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cpe" estado="pe"><a href="#" id="pe" title="pernambuco" data-value="Pernambuco"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cpb" estado="pb"><a href="#" id="pb" title="paraiba" data-value="Paraíba"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="crn" estado="rn"><a href="#" id="rn" title="riograndedonorte" data-value="Rio Grande do Norte"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cce" estado="ce"><a href="#" id="ce" title="ceara" data-value="Ceará"><span /></a></li>
            <li onClick={e => setStateClick({uf: e.target.title, estado: e.target.dataset.value})} id="cpi" estado="pi"><a href="#" id="pi" title="piaui" data-value="Piauí"><span /></a></li>
          </ul>
          <Chart brData={dataBrazilDefault} ufData={dataUf} currentUrl={location} />
        </Grid>
      </Grid>
    </div>
  )
}

export default MapDetail;