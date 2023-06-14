import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import Navigation from "./Components/Navigation"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<App/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

