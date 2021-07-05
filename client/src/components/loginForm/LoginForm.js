import "./LoginForm.css"

const LoginForm = () => {
  return ( 
  
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Login In</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
            <input type="submit" value="SIGN UP" className="login-btn" />
          </form>
        </div>
      </div>
    
   );
}
 
export default LoginForm;