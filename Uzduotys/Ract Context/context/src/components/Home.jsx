
import React, { useContext } from 'react';
import OrderContext  from '../OrderContext';

const Home = () => {
  const { orders, isLoading } = useContext(OrderContext);

  return (
    <div>
      {isLoading ? (
          <table>
          <thead>
            <tr>
              <th>Meal Name</th>
              <th>ID</th>
              <th>Number of People</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.mealName}</td>
                <td>{order.id}</td>
                <td>{order.people}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
      )}
    </div>
  );
}

export default Home;