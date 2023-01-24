
import React, { useContext, useState } from 'react';
import OrderContext  from '../OrderContext';
import Edit from './Edit';

const Home = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editOrderId, setEditOrderId] = useState(null);
  const { orders, isLoading, deleteOrder } = useContext(OrderContext);

  const handleEdit = (orderId) => {
    setEditOrderId(orderId);
    setShowEditForm(true);
  }
  

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
                <td><button onClick={()=>deleteOrder(order.id)}>Delete</button></td>
                <td><button onClick={()=> handleEdit(order.id)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
      )}
       {showEditForm && <Edit orderId={editOrderId} setShowEditForm={setShowEditForm} />}
    </div>
  );
}

export default Home;