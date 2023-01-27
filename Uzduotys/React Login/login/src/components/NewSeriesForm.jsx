import CardContext from "../context/CardContext";
import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleSeries from "./SingleSeries";

const NewSeriesForm = () => {

  const [formInputs, setFormInputs] = useState({
    name: '',
    season: '',
    year: '',
    genre: '',
    description: '',
    image: ''
  });

  const { addNewSeries, setSeries } = useContext(CardContext);
  const { loggedInUser } = useContext(UserContext);
  const [markedSeries, setMarkedSeries] = useState(0)

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

  const handleMark = (id) => {
    // handilina statusa ar article marked ar nea
    const newSeries = series.map(singleSeries => {
      if (singleSeries.id === id) {
        return {
          ...singleSeries,
          status: singleSeries.isSeen === 'marked' ? 'unmarked' : 'marked',
        };
      }
      return singleSeries;
    });
    setSeries(newSeries);
    setMarkedSeries(newSeries.filter(singleSeries => singleSeries.status === 'marked').length);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <input type="text" name="season"
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
 
export default NewPostForm;