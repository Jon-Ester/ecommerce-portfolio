import REact from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser}) =>(
  <header className ="header">
    <Link className ="logo-container" to = "/">
      <Logo className ="logo"></Logo>
    </Link>
    <div className="options">
      <Link className ="option" to ="/shop">SHOP</Link>
      <Link className ="option" to ="/contact">CONTACT</Link>
      {
        currentUser ? (
          <div className ="option" onClick ={()=> auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className ="option" to ="/signin">SIGN IN</Link>
        )
      }
    </div>
  </header>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);