import UserPostedSeries from "./UserPostedSeries";
import UserContext from "../context/UserContext";
import CardContext from "../context/CardContext";

import { useContext } from "react";
import AdminPage from "./AdminInfo";
import SingleSeries from "./SingleSeries";

const UserPage = () => {

  const { loggedInUser } = useContext(UserContext);
  const { series } = useContext(CardContext);
  const likedSeries = series.filter(singleSeries => singleSeries.likedBy && singleSeries.likedBy.includes(loggedInUser.id));
  const seenSeries = series.filter(singleSeries => singleSeries.seenBy && singleSeries.seenBy.includes(loggedInUser.id));




  return (
    <>
     <div>
    {loggedInUser && loggedInUser.level === 'admin'  && <AdminPage/>}
    </div>
    <div>
      <h1>Your Recomendations</h1>
      <UserPostedSeries />
      <h1>Your liked series</h1>
      {likedSeries.map((singleSeries, index) => 
       <SingleSeries 
         key={singleSeries.id || index}
         data={singleSeries}
       />  
     )}
      <h1>Your seen series</h1>
      {seenSeries.map((singleSeries, index) => 
       <SingleSeries 
         key={singleSeries.id || index}
         data={singleSeries}
       />  
     )}
      </div>  
    </>
  );
}
 
export default UserPage;