import React, { useEffect } from 'react';
import './App.css';
// import ButtonMode from './components/buttonMode'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/globalStyle'
import { useDispatch, connect } from 'react-redux'
import * as action from './redux/action.creators'

function App(state) {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('darkMode')==='true') {
        dispatch(action.reduxChangeMode(true)) 
    } else dispatch(action.reduxChangeMode(false)); 
}, [])



  return (
    <>
      <ThemeProvider theme={state.state.reducer.darkMode? darkTheme: lightTheme}>
        <GlobalStyles />
        <NavBar/>
        {/* <p>{`tryb ${state.state.reducer.darkMode? `DarkMode`: `LightMode`}`}</p> */}
      </ThemeProvider>
    </>
  );
} 

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(App);
