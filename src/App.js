import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Display from './components/Display';

// api call where our data comes from
import getLatestCountryDataByName from './api/fetchData';

const App = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getLatestCountryDataByName('USA') // hard passing in USA for now
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);


  return (
    <>
        <Header />
        <Display />
    </>
  );
}

export default App;