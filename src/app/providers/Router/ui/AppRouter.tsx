import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage/MainPage'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routeConfig)
                        .map(({ path, element }) =>
                            <Route
                                element={element}
                                key={path}
                                path={path}
                            />)
                }
            </Routes>
        </Suspense>
    )
}
