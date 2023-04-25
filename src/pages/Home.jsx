import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSerchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    //fetch('https://api.tvmaze.com/search/shows?q=girls')
    //  .then(response => response.json())
    //  .then(body => console.log(body));

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSerchInputChange} />
        <button type="submit">Update to random</button>
      </form>
    </div>
  );
};

export default Home;
