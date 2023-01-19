import  { useState } from 'react';

/// komponentas skirtas formai kuri leidzia useriui prideti nauja serijala i watchlista
//komponentas turi keleta state variables(name, season, year, genre, views, isSeen, and image), kurie naudojami storinti values is formos
//kiekvinas variable naudoja useState hookas 
function NewSeriesForm({ onAddSeries }) {
  const [name, setName] = useState('');
  const [season, setSeason] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [views, setViews] = useState('');
  const [isSeen, setIsSeen] = useState(false);
  const [image, setImage] = useState('');



  ///komponentas turi funkcija handleSubmit kuri issaukiama kai useris submitina forma. ji prevetina default ir callina onAddSeries funkcija kuri perduodama kaip propsas komponentui.
  //praeidamas per objecta su formos inputais ir argumentais.. poto vel resetina visus value sto default value
  
  const handleSubmit = event => {
    event.preventDefault();
    onAddSeries({ name, season, year, genre, views, isSeen, image });
    setName('');
    setSeason('');
    setYear('');
    setGenre('');
    setViews('');
    setIsSeen(false);
    setImage('');
  };

  return (
    <div className='newSeriesFormWrapper'>
    <form onSubmit={handleSubmit} className="newSeriesForm">
      <h1>Add Series to your WatchList</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Season:
        <input type="text" value={season} onChange={e => setSeason(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={e => setYear(e.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
      </label>
      <label>
        Views:
        <input type="text" value={views} onChange={e => setViews(e.target.value)} />
        </label>
      <label>
        Image:
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </label>
      <label>
        Is seen:
        <input type="checkbox" checked={isSeen} onChange={e => setIsSeen(e.target.checked)} />
      </label>
      <button type="submit">Add Series</button>
    </form>
  </div>
  );
}
export default NewSeriesForm;


///apslkritai komponentas atsakingas uz forma kuri leidzia useriui addinti serijala i watchlista.
//komponentas handlina formos inputus ka useris iraso ir kai submitina forma. callina onAddSeries finkcija ir perduoda inputu data.
///taip pat resetina formos inputuskai forma yra susubmitintga.
