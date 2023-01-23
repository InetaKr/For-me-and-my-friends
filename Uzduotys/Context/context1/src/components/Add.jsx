import React, {  useContext } from 'react';

import CheckContext from '../CheckContext';

const Add = () => {


  const { handleSubmit, people, setPeople,price, setPrice } = useContext(CheckContext);
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1> Add Orders to Check</h1>
      <label>
        Number of People:
        <input
          type="number"
          value={people}
          onChange={e => setPeople(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Order</button>
    </form>
    </>
    
  );
}

export default Add;
