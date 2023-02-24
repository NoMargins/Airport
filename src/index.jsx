import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cookies } from 'react-cookie';
import App from './App.jsx';

// const cookies = new Cookies();
// cookies.set('name', 'value', { SameSite: 'Strict' });

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

rootElem.render(<App />);
