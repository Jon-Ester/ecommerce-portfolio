import React from "react";
import'./sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    } catch (error){
      console.log(error);
    }
    
  }


  handleChange = (e)=>{
    const {value, name} = e.target;
    this.setState({[name]:value})
  }


  render(){
    return(
      <div className = "sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange = {this.handleChange}type="email" value ={this.state.email}label="Email" name ="email" />
          <FormInput handleChange = {this.handleChange} type="password" label ="Password" value ={this.state.password} name ="password" />
          <div className ="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type ="button"onClick ={signInWithGoogle} isGoogleSignIn >Sign In With GOOGLE</CustomButton>
          </div>
        </form>

      </div>
    )
  }
}

export default SignIn;