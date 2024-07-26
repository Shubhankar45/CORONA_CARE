import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({ isAuthenticated: false });

const AppMrapper = ()=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return(
    <Context.Provider vlaue={{isAuthenticated, setIsAuthenticated,user, setUser}}>
 <App />
    </Context.Provider>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppMrapper />
  </React.StrictMode>,
)
