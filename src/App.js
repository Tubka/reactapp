import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useDispatch, useSelector} from 'react-redux';
import * as action from './redux/action.creators';
import './style/main.scss'

function App(state) {
  const darkMode = useSelector(state => state.reducer.darkMode)
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('darkMode')==='true') {
        dispatch(action.reduxChangeMode(true)) 
    } else dispatch(action.reduxChangeMode(false)); 
}, [])



  return (
    <>
      <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
        <Router>
          <NavBar/>
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
} 

export default App;
