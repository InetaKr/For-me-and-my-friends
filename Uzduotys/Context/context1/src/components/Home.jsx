import React, { useContext } from 'react';
import CheckContext from '../CheckContext';

const Home = () => {
  //importuota orders ir deleteOrder. orders importuota, kad butu galima mapint ir trinti sukurta table row. kol duomenys uzsikrauna, rodo loading...
  const { checks, deleteCheck } = useContext(CheckContext);
  
  return (
    <>
     <div>
      <h1>Checks</h1>
      {checks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number of People</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {checks.map(check => (
              <tr key={check.id}>
                <td>{check.id}</td>
                <td>{check.people}</td>
                <td>{check.price}</td>
                <td><button onClick={() => deleteCheck(check.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
      )}
    </div>
    </>
  );
};

export default Home;