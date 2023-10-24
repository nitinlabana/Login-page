import React from 'react'

function Login() {
  return (
    <>
     <div className="container">
     <div className="form">
        <h2>Login</h2>
        <div className="logo">
        <a href="fb"><i class="fa-brands fa-facebook"></i></a>
        <a href="tw"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <p>or use your account</p>

        <input type="email" name="email" placeholder=" Email "/>
        <input type="password" name="" placeholder=" Password "/> 
         <h6>Forgot your password?</h6>
          <button className='btnn'>LOG IN</button>
     </div>

     <div className="text">
        <h3>HTML CSS Login FORM</h3>
        <p>This login form is create using pure
            HTML and CSS For social icon, FontAwesome is used
        </p>
     </div>
     </div>
    </>
  )
}

export default Login