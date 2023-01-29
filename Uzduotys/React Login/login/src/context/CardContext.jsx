import { createContext, useState,useEffect } from "react";
import UserContext from "./UserContext"
import { useContext } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {

  const [series, setSeries] = useState([]);
  const { loggedInUser } = useContext(UserContext);

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

const handleLike = async (id) => {
  const updatedSeries = series.find(singleSeries => singleSeries.id === id);
  if(!updatedSeries.likedBy.includes(loggedInUser.id)) {
      updatedSeries.likedBy.push(loggedInUser.id);
      updatedSeries.isLiked = true;
  } else {
      updatedSeries.likedBy = updatedSeries.likedBy.filter(userId => userId !== loggedInUser.id);
      updatedSeries.isLiked = false;
  }

  await updateSeries(id, updatedSeries);
}



const handleMark = async (id) => {
  const updatedSeries = series.find(singleSeries => singleSeries.id === id);
  if(!updatedSeries.seenBy.includes(loggedInUser.id)) {
      updatedSeries.seenBy.push(loggedInUser.id);
      updatedSeries.isSeen = "marked";
  } else {
      updatedSeries.seenBy = updatedSeries.seenBy.filter(userId => userId !== loggedInUser.id);
      updatedSeries.isSeen = "unmarked";
  }

  await updateSeries(id, updatedSeries);
}

const resetIsLikedIsSeen = (userId) => {
  series.forEach(singleSeries => {
    if (!singleSeries.likedBy.includes(userId)) {
      singleSeries.isLiked = false;
    }
    if (!singleSeries.seenBy.includes(userId)) {
      singleSeries.isSeen = "unmarked";
    }
  });
};



  return (
    <CardContext.Provider
      value={{
        series,
        setSeries,
        addNewSeries,
        deleteSeries,
        updateSeries,
        handleLike,
        handleMark,
        resetIsLikedIsSeen
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardProvider };
export default CardContext;