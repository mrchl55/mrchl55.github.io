import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from "recoil";
import {ThemeProvider} from "theme-ui";
import {theme} from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <RecoilRoot>
    <App />
      </RecoilRoot>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

