import  "./Register.css";
import { Link } from "react-router-dom";
const Register=()=>{

     return(
    <div class="cols">
     <div class="containe">
      <form  class="registration">
      <img src="https://cdn.dribbble.com/userupload/6361763/file/original-09819c08589dca8fd093f1543bfe0f4d.png?resize=450x338&vertical=center" alt="ReactImage" />
          <h1>Create a Account</h1><br/>
          
          <input id="name"type="text" placeholder="Enter Name"  required/><br/>
        
          <input id="phone" type="number" placeholder="Enter Phone number" minlength="10" required/><br/>
          <input id="em" type="email" placeholder="EmailId" required/><br/>
          <input id="pass" type="password" placeholder="password" required/><br/>
          <input id="det"name="textbox" type="text" placeholder="Door no,Street" /><br/>
          <input id="deti"name="textbox" type="text" placeholder="Address" /><br/>
  
          
          <div class="clearfix">

          <Link className='sec' to='/sec' ><button type="submit" class="signupbtn">Sign Up</button></Link>
          </div>
      </form>
    </div>
  </div>
     )
}
export default Register