import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import SeriesCard from './components/SeriesCard';
import NewSeriesForm from './components/NewSeriesForm';
import "./App.css";

function App() {
  //naudojame hook useState hook, kad inicijuotume do state kintamuosius
  const [series, setSeries] = useState([]);  //series kintamasis saugos duomenis, kuriuos gauname is serverio
  const [isLoggedIn, setIsLoggedIn] = useState(false);//isLoggedIn stebes vartotojo prisijungimo state/// pradine state yra false
  
  const handleLogin = (status) => { //nusakome funkcija kuri ziuri status ir nustato IsLoggedIn state to the that value
    setIsLoggedIn(status);
  }

  useEffect(() => { //naudojame useEffect hooka kad gautume duomenis is serverio kai komponentas pirma kart pateikiamas
    const fetchData = async () => { //kai elementas pirma kart rendinamas hookas naudoja callback funkcija 
      const res = await fetch('http://localhost:5001/series'); //kuri naudoja fetch Api is kurio paima data 
      const data = await res.json();
      setSeries(data); //iskvieciame setSeries kad atnaujitu state su jau fetchintais duomenimis
    };
    fetchData();
  }, []);



  ///Ši funkcija iškviečiama, kai pateikiama forma, ir ji naudojama naujiems serijalo duomenims siųsti į serverį ir serijalo būsenai atnaujinti naujais duomenimis.
  const handleAddSeries = async (newSeries) => { //newSeries komponentas yra naujo serijalo duomenys, kurios norime itraukti i serveri 
    await fetch("http://localhost:5001/series", { //post metodas naudojamas naujos serijos duomenims siusti i serveri
        method: "POST", /// tada metodas naudojamas kad tvarkytu responsus is serverio
        body: JSON.stringify(newSeries),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())/// tada metodas naudojamas kad tvarkytu responsus is serverio
    .then(data => setSeries([...series, data])) //tada metodas naudojams kaip setSeries callback, kad atnaujintu busena naujos serijos duomenimis
    .catch(error => console.error(error));/// Tai daroma sukuriant naują masyvą, kuris dabartinę serijos būseną sujungia su naujos serijos duomenimis.
};
///jei ivyksta klaida catch metodas randa error ir paraso pranesima konsuleje
///catch metodo naudojimas yra gera praktika, 
//nes jis leidžia tvarkyti klaidas konkrečiu ir kontroliuojamu būdu, o ne palikti jas neapdorotas
///metodas gali handlinti errorus ir neleisti jiems nucrashinti programos. taip kuriama patikimesne ir stabilesne programa
//Be to, jis taip pat gali parodyti klaidos pranešimą vartotojui, kad praneštų, kad kažkas nutiko.
//dabar metodas isconsolina klaidos pranesima, taip kurejas gali pamatyti ir ispresti problema


//funkcija deletina serijalo istrynima... padauotas vienas argumentas id... id yra to serijalo kuri norime istrinti is serverio
//funkcija naudoja setSeries callbeka kad atnaujintu statusa, filtruodamaa istrintus serijalus is serijalu masyvo...
///tai padaroma sukuriant nauja masyva. kurimae yra visi serijlai isskryrus serijala kurio id yra tas pats kaip istrinto serijalo
const handleDeleteSeries = async (id) => {
  await fetch(`http://localhost:5001/series/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok){
      setSeries(series.filter(singleSeries => singleSeries.id !== id));
    }
  }).catch(error => console.error(error));
};

///Tai funkcija, naudojama serijalui atnaujinti. 
//Funkcijai perduodami du argumentai: id ir updatedSeries. 
//id yra serijalo, kuri norime atnaujinti, ID, 
//o updatedSeries yra atnaujinti to serijalo duomenys.

//funkcija naudoja „setSeries“ callback kad atnaujintų staita, 
//pakeisdama senus serijalo duomenis atnaujintais serijalo duomenimis. 
//Tai daroma sukuriant naują masyvą, kuriame yra visi serijalai. Serijalui kartoti naudojamas map metodas, 
//jei singleSeries.id yra lygus atnaujinto serijalo ID, jis pakeičia tuos serijalo duomenis atnaujintais serijalo duomenimis, kitu atveju išsaugomi tie patys duomenys.

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



////returniname „NavBar“ komponentą  ir Header komponentą, perduodant „isLoggedIn“ stata ir „handelLogin“ funkciją kaip propsus.
///Taip pat pateikiame „NewSeriesForm“ komponentą ir perduodame „handleAddSeries“ funkciją kaip propsa, kuris bus naudojamas naujiems serijalams pridėti prie stato.
//Tada mapiname serijalo stata ir pateikiame SeriesCard komponentą kiekvienam masyvo elementui. 
//Mes perduodame atskirų serijalu duomenis, taip pat serijalo ID ir „handleDeleteSeries“ bei „handleUpdateSeries“ funkcijas kaip „SeriesCard“ komponento propsus.
return (
  <div className="App">
      <NavBar />                                                  
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
    <div>
      <NewSeriesForm onAddSeries={handleAddSeries} />
        <div className='title-h1'>
          <h1>Your WatchList</h1>
        </div>
        <div className='seriesCardsWrapper'>
          {series.map(singleSeries => (
          <SeriesCard
            key={singleSeries.id}
            series={singleSeries}
            id={singleSeries.id} 
            onDeleteSeries={handleDeleteSeries}
            handleUpdateSeries={handleUpdateSeries}/>
            ))}
        </div>
    </div>
</div>
);
}

export default App;