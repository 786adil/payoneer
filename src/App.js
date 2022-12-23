import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Login from './Login';
import DBdata from './DBdata';
import CC from './CC'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import fire from './FirebaseAuth'

class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {}
//     }
//   }
// componentDidMount() {
//   console.log(this.props,"post")
//     this.authListener();
//   }
//   authListener() {
//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user })
//       }
//       else {
//         this.setState({ user: null })
//       }
//     })
//   }
  

  render (){
  return (

    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DBdata />} />
          <Route path="/login" element={<Login />} />

        </Routes>
  
      </Router>
    </>

  );
}
}
export default App;
