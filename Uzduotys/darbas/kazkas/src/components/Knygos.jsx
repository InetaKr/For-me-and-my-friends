import { useState } from "react";


const Knygos = (props) => {
                                                      // DELETE
  //state, kuris ziuri ar knyga istrinta
  const [isDeleted, setIsDeleted] = useState(false);
  



  const handleDelete = async () => {
    await fetch(`http://localhost:5000/knygos/${props.knygos.id}`, {
      method: 'DELETE'
    });
    //paspaudus delete mygtuka, isDeleted state keiciasi i true, ir is data.json issitrina info
    setIsDeleted(true);
  }

  //kortele trinama is DOM. Kitu atveju reikia page refresh
  if (isDeleted) {
    return null;
  }

  return ( 
    <div className="knygos">
      <h1 className="pavadinimas">{props.pavadinimas}</h1>
      <img className="nuotrauka" src={props.nuotrauka} alt={props.pavadinimas}/>
      <div className="knygosInformacija">
        <p className="autorius">Knygos autorius: {props.autorius}</p>
        <p className="aprasymas">Knygos aprašymas: {props.aprasymas}</p>
        <p className="puslapiuSkaicius">Puslapių skaičius: {props.puslapiuSkaicius}</p>
        <p className="arPerskaityta">{props.arPerskaityta ? "Šią knygą perskaičiau" : "Šios knygos neperskaičiau"}</p>
        <button>Edit book info</button>
        <button onClick={handleDelete}>Delete book</button>
      </div>
    </div>
   );
}

export default Knygos;

