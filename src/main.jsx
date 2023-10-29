import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'

import photoStore from './photoStore.jsx'
import PhotoApi from './Components/PhotoApi.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <>
    <Provider store={store}>
      <App />
    </Provider>

    <Provider store={photoStore}>
      <PhotoApi></PhotoApi>
    </Provider>
  </>,


)
