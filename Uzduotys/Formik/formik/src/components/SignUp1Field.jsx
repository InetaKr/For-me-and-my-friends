
const SignUp1Field = ({ name, label, ...rest }) =>{
    return (
      <div >
        <label htmlFor={name}>{label}</label>
        <input  id={name} name={name} {...rest} />
      </div>
    );
  }
  
  export default SignUp1Field;