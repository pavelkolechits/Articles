import { Suspense, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppRouteProps, routeConfig } from '../config/routeConfig'
import { PageLoader } from 'shared/ui/Loader/PageLoader/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = () => {
    const renderRoute = useCallback((route: AppRouteProps) => {

        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )
        return <Route
            path={route.path}
            key={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : route.element} />

    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderRoute)}
        </Routes>
    )
}
