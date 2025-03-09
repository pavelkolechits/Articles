import { Link, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense, useContext, useState } from "react"
import './styles/index.scss'
import { ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"





export const App = () => {

  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Suspense>
        <Routes>
          <Route path="about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
