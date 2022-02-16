import React, { useEffect, useState } from 'react';
import Header from './components/Header';

// where our data comes from
import getLatestCountryDataByName from './api/fetchData';

const App = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        getLatestCountryDataByName()
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);


  return (
    <>
        <Header />
    </>
  );
}

export default App;