import React, { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import { APIResponse } from './types/types';

// https://cms.viktor.ai/blogposts?blogpost_categories.id=5&_start=0&_limit=10
const App = () => {
  const [data, setData] = useState([]);
  const [_start, setStart] = useState(2);
  const GRID_LENGTH = 4

  const url = `${process.env.REACT_APP_API_URL}&_start=${_start * GRID_LENGTH}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);


  const handlePageChange = (newPage: number) => {
    setStart(newPage)
  }

  return (
    <div className="App">
      <Grid posts={data} />
      <Pagination currentPage={_start} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
