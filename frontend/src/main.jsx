import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from "./constants/ScrollToTop.jsx"
import './index.css'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
)
