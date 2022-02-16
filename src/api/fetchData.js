// this is the all important file where we define our api calls
import axios from "axios";

const URL = "https://covid-19-data.p.rapidapi.com/country";

const getLatestCountryDataByName = async () => {
  try {
    // call the request
    const data = await axios.get(URL, {
      params: { name: "USA" },
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "672f444ba1msh5ef96f3113280dep176206jsnb157cac756a8",
      },
    });

    return data;

  } catch (error) {
    console.log(error);
  }
};

export default getLatestCountryDataByName;
