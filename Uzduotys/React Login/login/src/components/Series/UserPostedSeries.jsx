import SingleSeries from "./SingleSeries";
import CardContext from "../../context/CardContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const UserPostedSeries = () => {

  const { loggedInUser } = useContext(UserContext);
  const { series } = useContext(CardContext);

  return (
    <>
      {
        series
          .filter(singleSeries => singleSeries.userId === loggedInUser.id)
          .map(singleSeries => 
            <SingleSeries 
              key={singleSeries.id}
              data={singleSeries}
            />  
          )
      }
    </>
  );
}
 
export default UserPostedSeries;