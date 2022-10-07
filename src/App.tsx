import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Main from "./pages/Main"
import "./App.css"
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
