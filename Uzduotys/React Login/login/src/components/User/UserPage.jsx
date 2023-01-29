import UserPostedSeries from "../Series/UserPostedSeries";
import UserContext from "../../context/UserContext";
import CardContext from "../../context/CardContext";

import { useContext } from "react";
import AdminPage from "./AdminInfo";
import SingleSeries from "../Series/SingleSeries";

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
      <h1>Your Recommendations</h1>
      <div className="seriesCardsWrapper">
      <UserPostedSeries />
      </div>
      <h1>Your liked series</h1>
      <div className="seriesCardsWrapper">
      {likedSeries.map((singleSeries, index) => 
       <SingleSeries 
         key={singleSeries.id || index}
         data={singleSeries}
       />  
     )}
     </div>
      <h1>Your seen series</h1>
      <div className="seriesCardsWrapper">
      {seenSeries.map((singleSeries, index) => 
       <SingleSeries 
         key={singleSeries.id || index}
         data={singleSeries}
       />  
     )}
     </div>
      </div>  
    </>
  );
}
 
export default UserPage;