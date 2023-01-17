import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import SeriesCard from './components/SeriesCard';
import NewSeriesForm from './components/NewSeriesForm';

function App() {
  const [series, setSeries] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5001/series');
      const data = await res.json();
      setSeries(data);
    };
    fetchData();
  }, []);

  const handleAddSeries = async newSeries => {
    try {
      const response = await fetch('http://localhost:5001/series', {
        method: 'POST',
        body: JSON.stringify(newSeries),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setSeries([...series, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSeries = async (id) => {
    try {
      await fetch(`http://localhost:5001/series/${id}`, {
        method: 'DELETE',
      });
      setSeries(series.filter(singleSeries => singleSeries.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      <NavBar />
      <div>
      <NewSeriesForm onAddSeries={handleAddSeries} />
{series.map(singleSeries => (
<SeriesCard
key={singleSeries.id}
series={singleSeries}
onDeleteSeries={handleDeleteSeries}
/>
))}

</div>
</div>
);
}

export default App;