import UserPostedSeries from "./UserPostedSeries";
import UserContext from "../context/UserContext";
import CardContext from "../context/CardContext";

import { useContext } from "react";
import AdminPage from "./AdminPage";
import SingleSeries from "./SingleSeries";

const UserPage = () => {

  const { loggedInUser } = useContext(UserContext);
  const { series } = useContext(CardContext);
  const likedSeries = series.filter(singleSeries => singleSeries.isLiked && singleSeries.userId === loggedInUser.id);

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
      </div>  
    </>
  );
}
 
export default UserPage;