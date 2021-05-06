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
// import AppLoading from './components/AppLoading'

function App() {
const [user,loading]= useAuthState(auth)


if(loading){
  <AppLoading>
    <AppLoadingContents></AppLoadingContents>
    </AppLoading>
}

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
display:flex;
height:100vh;
`;

const AppLoadingContents= styled.div`
text-align:center;
padding-bottom: 100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


>img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}

`;


const AppLoading= styled.div`

`