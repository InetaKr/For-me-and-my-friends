import React, { useState, useEffect } from 'react';
import SeriesCard from './components/SeriesCard';
import NewSeriesForm from './components/NewSeriesForm';
import EditSeriesForm from './components/EditSeriesForm';

function App() {
  const [series, setSeries] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/series');
      const data = await res.json();
      setSeries(data);
    };
    fetchData();
  }, []);

  const handleAddSeries = async newSeries => {
    try {
      const response = await fetch('http://localhost:5000/series', {
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

  const handleEditSeries = async editedSeries => {
    try {
      const response = await fetch(`http://localhost:5000/series/${editedSeries.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedSeries),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setSeries(
        series.map(singleSeries => {
          if (singleSeries.id === data.id) {
            return data;
          }
          return singleSeries;
        })
      );
      setIsEditFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSeries = async id => {
    try {
      await fetch(`http://localhost:5000/series/${id}`, {
        method: 'DELETE',
      });
      setSeries(series.filter(singleSeries => singleSeries.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    setSelectedSeries(series.find(singleSeries => singleSeries.id === id));
    setIsEditFormOpen(!isEditFormOpen);
  };

  return (
    <div>
      <NewSeriesForm onAddSeries={handleAddSeries} />
{series.map(singleSeries => (
<SeriesCard
key={singleSeries.id}
series={singleSeries}
onEditSeries={handleEditSeries}
onDeleteSeries={handleDeleteSeries}
handleEdit={()=>handleEdit(singleSeries.id)}
/>
))}
{isEditFormOpen && <EditSeriesForm series={selectedSeries} onEditSeries={handleEditSeries} /> }
</div>
);
}

export default App;

