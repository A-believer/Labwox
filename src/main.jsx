import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store.js'; 
import "./config/logout.js"
import './index.css'
import "./font.css"
import { loadCartFromLocalStorage, loadOrderFromLocalStorage } from './utils/cartSlice.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


store.dispatch(loadCartFromLocalStorage())
store.dispatch(loadOrderFromLocalStorage())

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      <ToastContainer/>
      </AuthContextProvider>
      </Provider>
  </HashRouter>
  
  
)
