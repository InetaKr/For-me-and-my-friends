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

const handleMark = async (id) => {
  // handle status of whether the series is marked or not
  const newSeries = series.map(singleSeries => {
    if (singleSeries.id === id) {
      return {
        ...singleSeries,
        isSeen: singleSeries.isSeen === 'marked' ? 'unmarked' : 'marked',
      };
    }
    return singleSeries;
  });
  setSeries(newSeries);

  // send PATCH request to server to update the "marked/unmarked" status in the JSON file
  const updatedSeries = newSeries.find(singleSeries => singleSeries.id === id);
  await fetch(`http://localhost:5000/series/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({isSeen: updatedSeries.isSeen}),
    headers: { 'Content-Type': 'application/json' },
  });
}

const handleLike = async (id) => {
  // handle status of whether the series is liked or not
  const newSeries = series.map(singleSeries => {
    if (singleSeries.id === id) {
      return {
        ...singleSeries,
        isLiked: !singleSeries.isLiked,
      };
    }
    return singleSeries;
  });
  setSeries(newSeries);

  // send PATCH request to server to update the "liked/unliked" status in the JSON file
  const updatedSeries = newSeries.find(singleSeries => singleSeries.id === id);
  await fetch(`http://localhost:5000/series/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({isLiked: updatedSeries.isLiked}),
    headers: { 'Content-Type': 'application/json' },
  });
}

  return (
    <CardContext.Provider
      value={{
        series,
        setSeries,
        addNewSeries,
        deleteSeries,
        updateSeries,
        handleLike,
        handleMark
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardProvider };
export default CardContext;