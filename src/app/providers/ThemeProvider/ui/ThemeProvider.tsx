import { ReactNode, useEffect, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/lib/ThemeContext/ThemeContext"

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'normal'

export const ThemeProvider = (props: ThemeProviderProps) => {

    const { children, initialTheme } = props

    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    useEffect(() => {
        document.body.className = `app  ${theme}`
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
