import './register.css'

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h4 className="loginLogo">Connectivo</h4>
            <span className="loginDesc">Connect with friends and world around you on Connectivo.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="Email" placeholder='Username' className="loginInput" />
                <input type="Password" placeholder='Email' className="loginInput" />
                <input type="Password" placeholder='Password' className="loginInput" />
                <input type="Password" placeholder='Password Again' className="loginInput" />
                <button className="loginButton">Sign up</button>
    
                <button className="loginRegisterButton">Login into Account</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Register