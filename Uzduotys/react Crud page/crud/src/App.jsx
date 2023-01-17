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

  const handleAddSeries = async (newSeries) => {
    await fetch("http://localhost:5001/series", {
        method: "POST",
        body: JSON.stringify(newSeries),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .then(data => setSeries([...series, data]))
    .catch(error => console.error(error));
};


const handleDeleteSeries = async (id) => {
  await fetch(`http://localhost:5001/series/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok){
      setSeries(series.filter(singleSeries => singleSeries.id !== id));
    }
  }).catch(error => console.error(error));
};

const handleUpdateSeries = async (id, updatedSeries ) => {
  await fetch(`http://localhost:5001/series/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedSeries),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    if(res.ok){
    setSeries(series.map(singleSeries => singleSeries.id === id ? updatedSeries : singleSeries));
    }
  }).catch(error => console.error(error));
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
id={singleSeries.id} 
onDeleteSeries={handleDeleteSeries}
handleUpdateSeries={handleUpdateSeries}
/>
))}

</div>
</div>
);
}

export default App;