import { createContext, useState,useEffect } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {

  const [series, setSeries] = useState([]);

  useEffect (() => {
    const data = async () => {
       const res = await fetch('http://localhost:5000/series');
       const data = await res.json();
       setSeries(data);
    };
    data();
}, []);

  const addNewSeries = async (newSeries) => {
    await fetch("http://localhost:5000/series",{
        method: "POST", 
        body: JSON.stringify(newSeries),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .then(data => setSeries([...series, data]));
  };

  const deleteSeries = async (id) => {
    await fetch(`http://localhost:5000/series/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok){
    setSeries(series.filter(singleSeries => singleSeries.id !== id));
  }
  })
};

  const updateSeries =  async (id, updatedSeries) => {
    await fetch(`http://localhost:5000/series/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updatedSeries),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    if(res.ok){
        setSeries(series.map(singleSeries => singleSeries.id.toString() === id ? {...singleSeries, ...updatedSeries} : singleSeries));
  }
})
};

  return (
    <CardContext.Provider
      value={{
        series,
        setSeries,
        addNewSeries,
        deleteSeries,
        updateSeries
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardProvider };
export default CardContext;