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
import { getUserInited } from "entities/User/model/selectors/userSelectors"
import { useSelector } from "react-redux"
import { Loader } from "shared/ui/Loader/loader/Loader"





export const App = () => {
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch])
    if (!inited) {
        <Loader /> 
    }
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
