import { ReactNode, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/lib/ThemeContext/ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'normal'

export const ThemeProvider = (props: ThemeProviderProps) => {
    
    const {children} = props
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
