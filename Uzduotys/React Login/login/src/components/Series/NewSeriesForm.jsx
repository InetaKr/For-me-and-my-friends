import CardContext from "../../context/CardContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const NewSeriesForm = () => {

  const [formInputs, setFormInputs] = useState({
    name: '',
    season: '',
    year: '',
    genre: '',
    description: '',
    image: ''
  });

  const { addNewSeries } = useContext(CardContext);
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  

  const handleSubmit = e => {
    e.preventDefault();
    const newSeries = {
      name: formInputs.name,
      season: formInputs.season,
      year: formInputs.year,
      genre: formInputs.genre,
      description: formInputs.description,
      image: formInputs.image,
      isSeen: "unmarked",
      isLiked: false,
      id: Date.now(),
      userId: loggedInUser.id
    };

    addNewSeries(newSeries);
    navigation('/');
  }



  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      <form onSubmit={handleSubmit} className="Add-form">
        <h2>Add Series</h2>
        <label>
          Image:
          <input type="text" name="image"
            value={formInputs.image}
            onChange={(e) => setFormInputs({...formInputs, image:e.target.value})}
          />
        </label>
        <label>
          Name:
          <input type="text" name="name"
            value={formInputs.name}
            onChange={(e) => setFormInputs({...formInputs, name:e.target.value})}
          />
        </label>
        <label>
          Season:
          <input type="number" name="season"
            value={formInputs.season}
            onChange={(e) => setFormInputs({...formInputs, season:e.target.value})}
          />
        </label>
        <label>
          Year:
          <input type="number" name="year"
            value={formInputs.year}
            onChange={(e) => setFormInputs({...formInputs, year:e.target.value})}
          />
        </label>
        <label>
          Genre:
          <input type="text" name="genre"
            value={formInputs.genre}
            onChange={(e) => setFormInputs({...formInputs, genre:e.target.value})}
          />
        </label>
        <label>
          Description:
          <br />
          <textarea type="text" name="description"
            value={formInputs.description}
            onChange={(e) => setFormInputs({...formInputs, description:e.target.value})}
          />
        </label>

        <input type="submit" value="Create new Post" />
      </form>
    </>
  );
}
 
export default NewSeriesForm;