import { createContext,  useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CheckContext = createContext();

//const initialState = {
  //checks: [],
  //people: '',
 // price: ''
//}

//const checkReducer = (state, action) => {
  //switch (action.type) {
      //case 'FETCH_CHECKS':
         // return {...state, checks: action.payload};
      //case 'ADD_CHECK':
          //return {...state, checks: [...state.checks, action.payload]};
      //case 'DELETE_CHECK':
         // return {...state, checks: state.checks.filter(check => check.id !== action.payload)}
      //case 'SET_PEOPLE':
         // return {...state, people: action.payload};
      //case 'SET_PRICE':
         // return {...state, price: action.payload};
      //default:
         // return state;
  //}
//}

const CheckProvider = ({children}) => {

  //const [state, dispatch] = useReducer(checkReducer, initialState);

  const [checks, setChecks] = useState([]);
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  //const getChecks = async () => {
   // const response = await fetch('https://believed-shore-vanadium.glitch.me/');
    //const data = await response.json();
    //dispatch({type: 'FETCH_CHECKS', payload: data});
  //}
 
 
  const getChecks = async () => {
    const response = await fetch('https://believed-shore-vanadium.glitch.me/');
    const data = await response.json();
    setChecks(data);
  }
  
 // const deleteCheck = (id) => {
   // fetch(`https://believed-shore-vanadium.glitch.me/${id}`, {
    //  method: 'DELETE'
    //})
   // .then(res => res.json())
   // .then(data => {
     // if(data.success) {
        //dispatch({type: 'DELETE_CHECK', payload: id});
        //getChecks();
      //}
    //})
  //}
  
  
  
  
  const deleteCheck = ( id ) => {
    fetch(`https://believed-shore-vanadium.glitch.me/${id}`, {
      method: 'DELETE'
   })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        setChecks(checks.filter(check => check.id !== id))
        getChecks()
      }
    })

  }
  
//const addCheck = (people, price) => {
  //const newCheck = {
    //id: Date.now(),
    //people: people,
    //price: price,
  //}
  //fetch('https://believed-shore-vanadium.glitch.me/', {
    //method: 'POST',
   // headers: { 'Content-Type': 'application/json' },
   // body: JSON.stringify(newCheck),
 // })
   // .then(response => response.json())
   // .then(data => {
     // dispatch({type: 'ADD_CHECK', payload: data});
    //  getChecks();
   // })
//}


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
       getChecks()
     })
   
  }
 

  useEffect(() => {
    getChecks();
  }, [checks]);


  //const handleSubmit = (event) => {
    //event.preventDefault();
    //addCheck(state.people, state.price);
    //dispatch({type: 'SET_PEOPLE', payload: ''});
    //dispatch({type: 'SET_PRICE', payload: ''});
    //navigate('/');
  //}

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

