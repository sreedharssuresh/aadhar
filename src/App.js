import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconButton from './AppBarExampleIconButton';
import Appbar2 from './Appbar2';
import Appbar3 from './Appbar3';
import PaperExampleRounded from'./PaperExampleRounded.js';
import PaperExampleRounded2 from'./PaperExampleRounded2.js';
const App = () => (
  <MuiThemeProvider >
  <AppBarExampleIconButton/>
    <Appbar2/>
    <Appbar3/>
    <div>
    <PaperExampleRounded/>
    </div>
    <div>
    <PaperExampleRounded2/>
    </div>
  </MuiThemeProvider>
);

export default App;
