import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const CheckContext = createContext();

const CheckProvider = ({children}) => {

  const [checks, setChecks] = useState([]);
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getChecks = async () => {
      const response = await fetch('https://believed-shore-vanadium.glitch.me/');
      const data = await response.json();
      setChecks(data);
    }
    getChecks();
  }, []);
  
  
   const addCheck = (people, price) => {
    const newCheck = {
      id: Date.now(),
      people: people,
      price: price,
    }
    console.log(newCheck)
    fetch('https://believed-shore-vanadium.glitch.me/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCheck),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setChecks([...checks, { 
          id: data.id, 
          people: data.people, 
          price: data.price }]);
      })
     
  }
  

 
  const deleteCheck = ( id ) => {
    fetch(`https://believed-shore-vanadium.glitch.me/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        setChecks(checks.filter(check => check.id !== id))
      }
    })

  }



  const handleSubmit = (event) => {
    event.preventDefault();
    addCheck(people, price);
    setPeople('');
    setPrice('');
    navigate('/');
    }


  return(
    <CheckContext.Provider 
    value={{ 
        checks, 
        addCheck, 
        deleteCheck,
        handleSubmit,
        navigate,
        people,
        setPeople,
        price,
        setPrice}}>
      {children}
    </CheckContext.Provider>
  );
}
export { CheckProvider };
export default CheckContext;

//useCallback naudojamas kad nekurtų kopiju kaskart kai atnaujinamas OrderProvider.

//vietoj useCallback, kad nereiketu jo naudoti, butu galima sukurti atskirus useState deleteOrder ir addOrder, atskirus kintamuosius, taciau taip reiketu daugiau kodo, taigi jeigu app yra pakankamai našus, galima ir nekurti atskiru kintamuju. siuo atveju del praktikos turbut butu buve geriau pasikurti, bet kadangi info nera daug, tai nekuriau. 