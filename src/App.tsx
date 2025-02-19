import { Link, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense } from "react"


export const App = () => {
  return (
    <div className="app">
        <Link to={'about'}>About</Link>
        <Link to={'/'}>Main</Link>
        <Suspense>
        <Routes>
            <Route path="about" element={<AboutPageAsync/>}/>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
        </Suspense>
    </div>
  )
}
