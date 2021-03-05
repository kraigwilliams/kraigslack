import React from 'react';
import Header from './components/Header'
// import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <Router>
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
        </Router>
    </div>
  );
}

export default App;


const AppBody=styled.div`
height:100vh;
display:flex;
`;

