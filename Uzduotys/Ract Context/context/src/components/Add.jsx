import React, { useContext } from 'react';
import  OrderContext  from '../OrderContext';

const Add = () => {
  const { people, price, mealName, setPeople, setPrice, setMealName,handleSubmitAdd } = useContext(OrderContext);

  

  return (
    <form onSubmit={handleSubmitAdd}>
      <label>
        Meal Name:
        <input type="text" value={mealName} onChange={e => setMealName(e.target.value)} />
      </label>
      <label>
        Number of People:
        <input type="number" value={people} onChange={e => setPeople(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default Add;
