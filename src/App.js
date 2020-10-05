import React from 'react';
import './App.css';
import ButtonMode from './buttonMode'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/theme';
import { GlobalStyles } from './styled/globalStyle'
import { useDispatch, connect } from 'react-redux'

function App(state) {
  return (
    <>
      <ThemeProvider theme={state.state.reducer.darkMode? darkTheme: lightTheme}>
        <GlobalStyles />
        <ButtonMode />
        <p>{`tryb ${state.state.reducer.darkMode? `DarkMode`: `LightMode`}`}</p>
      </ThemeProvider>
    </>
  );
} 

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(App);