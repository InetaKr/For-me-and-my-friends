import CardContext from "../../context/CardContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import SingleSeries from "./SingleSeries";

const Series = () => {

  const { series } = useContext(CardContext);
  const { users } = useContext(UserContext);

  const bannedUsers = users.map(user => user.isBanned && user.id).filter(item => item !== false);
  const availableSeries = series.filter(singleSeries => !bannedUsers.includes(singleSeries.userId));

  return (
    <>
    <h1>Recommendations</h1>
    <div className="seriesCardsWrapper">
      {
       availableSeries.map((singleSeries, index) => 
       <SingleSeries 
         key={singleSeries.id || index}
         data={singleSeries}
       />  
     )
      }
      </div>
    </>
  );
}
 
export default Series;