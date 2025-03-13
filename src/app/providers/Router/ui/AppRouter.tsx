import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { PageLoader } from 'shared/ui/Loader/PageLoader/PageLoader'

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {
                    Object.values(routeConfig)
                        .map(({ path, element }) =>
                            <Route
                                element={
                                    <div className='page-wrap'>
                                        {element}
                                    </div>
                                    
                                }
                                key={path}
                                path={path}
                            />)
                }
            </Routes>
        </Suspense>
    )
}
