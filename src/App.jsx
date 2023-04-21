import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className='App max-w-[1280px] mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
