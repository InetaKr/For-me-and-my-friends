import './App.css'
import SignUp from './components/SignUp'
//import SignUp1 from './components/SignUp1'

const App = () =>{
  return(
    <>
     <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <div className='SignUpForm'>
      <h3>Sign Up Here</h3>
      <SignUp />
    </div>

    {/*<div>
      <h1>Another Sign Up Form</h1>
      <SignUp1 />
    </div>*/}
    </>
  )
}


export default App;