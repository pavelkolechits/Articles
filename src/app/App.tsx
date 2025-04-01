import { AppRouter } from "./providers/Router"
import './styles/index.scss'
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import 'shared/config/i18n/i18n'
import { Suspense, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PageErrorFallback } from "widgets/PageErrorFallback"
import { useAppDispatch } from "shared/hoocs/useAppDispatch/useAppDispatch"
import { userActions } from "entities/User"





export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch])
    
    return (
        <div className='app'>
            <ErrorBoundary fallback={<PageErrorFallback />}>
                <Suspense fallback=''>
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>

    )
}
