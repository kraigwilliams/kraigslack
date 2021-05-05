import React from 'react';
import Header from './components/Header'
// import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'

function App() {
const [user,loading]= useAuthState(auth)

  return (
    <div className="App">
      <Router>
     {!user?(
       <Login/>):(
        <>
       <Header/>
<AppBody>
  <Sidebar/>
  <Switch>
    <Route exact path='/'>
      <Chat/>
      </Route>

      </Switch>
</AppBody>

       </>

       )
     }   
        </Router>
    </div>
  );
}

export default App;


const AppBody=styled.div`
height:100vh;
display:flex;
`;

