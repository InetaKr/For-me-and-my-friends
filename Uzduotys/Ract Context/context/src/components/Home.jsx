
import { useContext } from "react";
import ChecksContext from "../ChecksContext";

const Home = () => {
    const { checks, handleDelete, handleEditButton } = useContext(ChecksContext);

    return(
        <>
        <div>
         <h1>Checks</h1>
         {checks.length > 0 ? (
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
               {checks.map(check => (
                 <tr key={check.id}>
                    <td>{check.mealName}</td>
                   <td>{check.id}</td>
                   <td>{check.customerNumber}</td>
                   <td>{check.price}</td>
                   <td><button onClick={() => handleDelete}>Delete</button></td>
                   <td><button onClick={()=> handleEditButton}>Edit</button></td>
                 </tr>
               ))}
             </tbody>
           </table>
         ) : (
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
         )}
       </div>
       </>
     );
   };

export default Home 