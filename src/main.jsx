import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store.js'; 
import "./config/logout.js"
import './index.css'
import "./font.css"
import { loadCartFromLocalStorage } from './utils/cartSlice.js';

store.dispatch(loadCartFromLocalStorage())

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </Provider>
  </HashRouter>
  
  
)
