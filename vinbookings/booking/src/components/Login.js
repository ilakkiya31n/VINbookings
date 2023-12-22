
import React from "react";
import  "./Login.css";

import { Link } from 'react-router-dom';
const Login=()=> {
    return (
          <div className="col">
           
            <div className="contain">
                
                <form class="register">
                <img src="https://cdn.dribbble.com/userupload/6361763/file/original-09819c08589dca8fd093f1543bfe0f4d.png?resize=450x338&vertical=center" alt="React Image" />
                    <h2 className="h">LOGIN</h2>
                    <label class="lab"><b>EmailId:</b></label>
                    <input id="email" type="email" placeholder="EmailId" required/><br/>
                    <label class="lab"><b>Password:</b></label>
                    <input id="pass" type="password" placeholder="password" required/><br/>
                    <Link className='sec' to='/sec' ><button>Login</button></Link>
                    <b>Don't have an account?</b><br/>
                    <Link className='reg' to='/reg'><button>Register</button></Link>
                </form>
            </div>
        </div>  
        
    )
  }
export default Login