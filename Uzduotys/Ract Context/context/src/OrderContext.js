import {  createContext, useState, useEffect } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [mealName, setMealName] = useState('');
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  

 



  // Add a new order
  const addOrder = async newOrder => {
    try {
      const res = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        body: JSON.stringify(newOrder),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setOrders([...orders, data]);
    } catch (error) {
      console.log(error);
    }
  };

// Fetch the initial data from the back-end
useEffect(() => {
  fetch('http://localhost:5000/orders')
    .then((res) => res.json())
    .then((data) => {
      setOrders(data);
      setIsLoading(false);
    });
}, []);




  // Edit an existing order
  const editOrder = async (id, newData) => {
    try {
      const res = await fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ people, price,mealName }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setOrders(orders.map(order => (order.id === id ? data : order)));
      setPeople('');
      setPrice('');
      setMealName('');
    } catch (error) {
      console.log(error);
    }
  };

  // Delete an order
  const deleteOrder = async id => {
    try {
      await fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      });
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmitEdit = ( e) => {
    e.preventDefault();
    editOrder( { people, price, mealName });
};


  
  
  const handleSubmitAdd = e => {
    e.preventDefault();
    addOrder({ people, price, mealName });
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        people,
        price,
        isLoading,
       

addOrder,
setPeople,
setPrice,
editOrder,
handleSubmitEdit,
deleteOrder,
mealName,
setMealName,
handleSubmitAdd,
}}
>
{children}
</OrderContext.Provider>
);
};

export { OrderProvider };
export default OrderContext