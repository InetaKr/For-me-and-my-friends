import {  useState } from "react";
import { useContext } from "react";
import ChecksContext from "../ChecksContext";

function Add () {
    const { addCheck } = useContext(ChecksContext)
    const [mealName, setMealName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [price, setPrice] = useState('');

    return (
        <form onSubmit={addCheck}>
            <label>
                Meal Name:
                <input type="text" value={mealName} onChange={e => setMealName(e.target.value)} />
            </label>
            <label>
                Customer Number:
                <input type="number" value={customerNumber} onChange={e => setCustomerNumber(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </label>
            <button type="sunmit"> Add </button>
        </form>
    )
}

export default Add;

