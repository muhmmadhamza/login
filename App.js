import logo from './logo.svg';
import profile from "../src/image/a.png";
import email from "../src/image/email.jpg";
import pass from "../src/image/pass.png";
import './App.css';

function App() {
  return (
    <div className="main">
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-imgs'>
              <img src={profile} alt='profile' className='profile' />
            </div>
          </div>
          <div>
            <h1>
              Login Form
            </h1>
            <div>
              <img src={email} alt='email' className='email' />
              <input type="text" placeholder='enter name' className='name' />
            </div>
            <div className='second-input'>
              <img src={pass} alt='pass' className='email' />
              <input type="password" placeholder='enter password' className='name' />
            </div>
            <div className='login-button'>
              <button>login</button>
            </div>

            <p className='link'>
              <a href='#'>Forget password</a> or<a href='#'>Sign Up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
