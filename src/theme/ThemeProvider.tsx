import { ReactNode, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext"
import { Theme } from "./ThemeContext"

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
