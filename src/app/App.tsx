import { useTheme } from "shared/hoocs/useTheme/useTheme"
import { classNames } from "shared/helpers/classNames/classNames"
import { AppRouter } from "./providers/Router"
import './styles/index.scss'
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import 'shared/config/i18n/i18n'
import { Suspense, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PageErrorFallback } from "widgets/PageErrorFallback"
import { Modal } from "shared/ui/Modal/Modal"






export const App = () => {
    const { theme } = useTheme()

    return (
        <ErrorBoundary fallback={<PageErrorFallback/>}>
            <div className='app'>
                <Suspense fallback=''>
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </ErrorBoundary>

    )
}
