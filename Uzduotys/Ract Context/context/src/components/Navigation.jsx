import { Link } from 'react-router-dom'


const Navigation =() => {
    return (
      <>
       <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/edit">Edit</Link></li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Navigation;
  