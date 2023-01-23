import React, { useContext, useEffect } from 'react';
import OrderContext  from '../OrderContext';



const Edit = ({ id }) => {
   
  const { orders, people, price, mealName, setPeople, setPrice,setMealName, handleSubmitEdit} = useContext(OrderContext);
  
  const order = orders.find(order => order.id === id);
  
  useEffect(() => {
    setPeople(order.people);
    setPrice(order.price);
    setMealName(order.mealName)
    }, [order, setPeople,setPrice,setMealName]);
    
    return (
    <form onSubmit={handleSubmitEdit(order.id)}>
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
    <button type="submit">Save Changes</button>
    <button type="button" >Cancel</button>
    </form>
    );
    }
    
    export default Edit;
