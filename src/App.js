import React, { Component } from 'react';
import logo from './bubble.png';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import axios from 'axios';

class App extends Component {
  componentDidMount() {
    console.log("I was triggered during componentDidMount")
  }

  /*tosubmit(something) {
    console.log(("hey"));
    alert("iNval");/*
    const user = document.getElementById('username');
    const url = 
    
    if(user) {
      
    } else {
      alert("Invalid input");
    }
  }*/

  render() {
    return (
  
    /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YAMMER</h1>
        </header>
        <br /> 
        <br /> 
        <p className="App-intro">
          Welcome! Input your Username and Password.
        </p>
       <div><form action="javascript:tosubmit();" onsubmit="tosubmit();" method="post">
       		<label>Username:</label>     
			      <input type="text" id="username" name="username"/>
			  <br />    
		      <label>Password:</label>
			       <input type="password" id="password" name="password"/>
        <br /> 
          <input type="submit" onclick="this.tosubmit.bind(this);" class="btn border-button-black"/>

	       </form>
	     </div>
      </div>*/

      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event) {
    var apiBaseUrl = "http://localhost:3000/api/";
    var self = this;
    var payload= {
      "username":this.state.username,
      "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if (response.data.code == 200) {
      console.log("Login successfull");
      var uploadScreen=[];
      //uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    } 
    else if (response.data.code == 401){
     console.log("Username password do not match");
     alert("username password do not match")
    }
    else {
      console.log("Username does not exists");
      alert("Username does not exist");
    }
    })
    .catch(function (error) {
     console.log(error);
    });
  }
  

}
const style = {
margin: 15,
};

export default App;
