import { createContext, useState, useEffect } from "react";

const ChecksContext =createContext();

const CkecksProvider = ({ children, onAdd }) =>{

  const [checks, setChecks] = useState([]);  
  const [isEditing, setIsEditing] = useState(false);
  const [mealName, setMealName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [price, setPrice] = useState('');


  useEffect(() => { 
    const fetchData = async () => { 
      const res = await fetch('http://localhost:5000/checks');  
      const data = await res.json();
      setChecks(data); 
    };
    fetchData();
  }, []);
  
  const handleAddChecks = async (newCheck) => { 
    await fetch("http://localhost:5000/checks", { 
        method: "POST", 
        body: JSON.stringify(newCheck),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .then(data => setChecks([...checks, data])) 
};

const handleDeleteCheck = async (id) => {
  await fetch(`http://localhost:5000/checks${id}`, {
    method: 'DELETE',
  }).then(res => {
    if(res.ok){
      setChecks(checks.filter(check => check.id !== id));
    }
  })
};

//const handleUpdateSeries = async (id, updatedCheck ) => {
  //await fetch(`http://localhost:5001/series/${id}`, {
    //method: 'PUT',
   // body: JSON.stringify(updatedCheck),
    //headers: { 'Content-Type': 'application/json' },
  //}).then(res => {
   // if(res.ok){
    //setChecks(checks.map(check => check.id === id ? updatedCheck : check));
   // }
 /// })
//};

const addCheck = (event) =>{
  event.preventDefault();
  onAdd({mealName, customerNumber, price})
  setMealName('');
  setCustomerNumber('');
  setPrice ('')
}

const handleEditButton = () => {
  setIsEditing(!isEditing);
};

const handleDelete = () => {
  handleDeleteCheck(checks.id);
};
return (
    <ChecksContext.Provider
    value={{
      checks,
      handleDelete,
      handleEditButton,
      addCheck,
      handleAddChecks
        

    }}>
    {children}
    </ChecksContext.Provider>
);
}
export { CkecksProvider };
export default ChecksContext;