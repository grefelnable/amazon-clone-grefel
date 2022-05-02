import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SharedLayout from "./pages/SharedLayout"
import Checkout from "./pages/Checkout"
import { auth } from "./firebase"
import { useStateValue } from "./components/StateProvider"

function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log(user)

  const getAuth = () => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }
  React.useEffect(() => {
    getAuth()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
