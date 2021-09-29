import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in&up/sign-in&up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {conntect} from 'react-redux';

import {setCurrentUser} from './redux/user/userr/actions';

class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
     currentUser:null
   }
   
 }
 
 unsubscribeFromAuth = null;

 componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot =>{
         this.setState({
           currentUser:{
             id: snapShot.id,
             ...snapShot.data()
           }
         })
       })
   }
   this.setState({currentUser:userAuth})
  })
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
 
 
  render(){
    return(
    <div>
      <Header ></Header>
      <Switch>
        <Route exact path ="/" component ={HomePage}/>
        <Route path ="/shop" component ={ShopPage}/>
        <Route path ="/signin" component ={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch()
})

export default connect(null, )(App);