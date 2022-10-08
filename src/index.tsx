import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import User from "./store/user"

const authUser = new User()
export const Context = createContext({ authUser })

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ authUser }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
)
