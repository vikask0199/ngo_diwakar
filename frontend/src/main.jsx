import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import ScrollToTop from "./constants/ScrollToTop.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
)
