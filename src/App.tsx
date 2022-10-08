import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Context } from "."
import Layout from "./components/Layout"
import Main from "./pages/Main"
import "./App.css"
import "./styles/global.scss"
import RestaurantById from "./pages/RestaurantById"
import MyProfile from "./pages/MyProfile"

function App() {
  const { authUser } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authUser.myProfile()
    }
  }, [authUser])

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/restaurants/:id" element={<RestaurantById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default observer(App)
