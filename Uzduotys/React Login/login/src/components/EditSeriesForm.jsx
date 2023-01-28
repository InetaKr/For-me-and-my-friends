import CardContext from "../context/CardContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditSeriesForm = () => {

  const { id } = useParams();

  const { series, updateSeries } = useContext(CardContext);

  const selectedSeries = series.find(singleSeries => singleSeries.id.toString() === id)

  const navigation = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: selectedSeries.name,
      season: selectedSeries.season,
      year: selectedSeries.year,
      genre: selectedSeries.genre,
      description: selectedSeries.description,
      image: selectedSeries.image,
  });

  const handleSubmit = e => {
    e.preventDefault();
    
    updateSeries(id, formInputs);
    
    navigation('/');
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
          <textarea type="text" name="description"
            value={formInputs.description}
            onChange={(e) => setFormInputs({...formInputs, description:e.target.value})}
          />
        </label>
        <input type="submit" value="Edit Series" />

        </form>
    </>
  );
}
 
export default EditSeriesForm;
