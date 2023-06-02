import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  //const [apiData, setApiData] = useState([]);
  const [apiDataError, setapiDataError] = useState(null);

  console.log(apiDataError);

  const onSerchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      setapiDataError(null);

      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSerchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
