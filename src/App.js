import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';
// const HatsPage = () =>(
// <div>
//   <h1>HatsPage</h1>
// </div>

// );

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log(user);
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

 render(){ return (
    <div className="App">
  
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
     
        
    </div>);
 }
}

export default App;
