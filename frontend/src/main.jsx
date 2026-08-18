import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HelmetProvider } from 'react-helmet-async';
import { WOW } from 'wowjs';

// initialize WOW.js for scroll animations
if (typeof window !== 'undefined') {
	new WOW().init();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	  <HelmetProvider>
		<App />
	  </HelmetProvider>
	</BrowserRouter>
);
