import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main-alternative.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>
              I'm baby shoreditch meh gluten-free offal fam yr.
              Single-origin coffee banh mi microdosing fixie portland,
              organic +1 swag roof party chartreuse cornhole
            </p>
            <Link to='/register' className='btn btn-hero'>Login/Register</Link>
          </div>
          <img src={main} alt='job hunt' className="img main-img"/>
        </div>
    </Wrapper>
  )
}

export default Landing