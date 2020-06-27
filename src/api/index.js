import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/countries/brazil';

export const fetchDataBrazil = async () => {
  try {
    const { data: { 
          confirmed : { value: brConfirmed }, 
          recovered : { value: brRecovered },
          deaths : { value: brDeaths },
          lastUpdate : brDate }} = await axios.get(url);

    return { brConfirmed, brRecovered, brDeaths, brDate };
  } catch (error) {
    console.log(error);
  }
}

export const fetchStateData = async (estado) => {
  try {
    const { data } = await axios.get(`${url}/confirmed`);

    const modifiedData = data.map((data) => ({
      uf: data.provinceState.split(" ").join("").toLowerCase(),
      ufConfirmed: data.confirmed,
      ufRecovered: data.recovered,
      ufDeaths: data.deaths,
      ufDate: data.lastUpdate,
    }));

    const stateData = modifiedData.filter(uf => uf.uf === estado);
    
    return stateData;
  } catch (error) {
    console.log(error);
  }
}