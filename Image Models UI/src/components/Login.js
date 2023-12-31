import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div>
  <form className="form-signin">
    <img className="mb-4" src="https://cdn.shopify.com/s/files/1/0665/7966/1115/files/Logo_sobre_moda_femenina_minimalista_neutral-removebg-preview.png?v=1671856489" alt width={72} height={72} />
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label htmlFor="inputEmail" className="sr-only">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
    <label htmlFor="inputPassword" className="sr-only">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" defaultValue="remember-me" /> Remember me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
  </form>
</div>

  );
}

export default Login;
