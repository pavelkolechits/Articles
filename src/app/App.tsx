import { Link } from "react-router-dom"
import { useTheme } from "shared/hoocs/useTheme/useTheme"
import { classNames } from "shared/helpers/classNames/classNames"
import { AppRouter } from "./providers/Router"
import './styles/index.scss'



export const App = () => {

  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <AppRouter /> 
    </div>
  )
}
