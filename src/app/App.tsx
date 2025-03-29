import { AppRouter } from "./providers/Router"
import './styles/index.scss'
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import 'shared/config/i18n/i18n'
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PageErrorFallback } from "widgets/PageErrorFallback"





export const App = () => {
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
