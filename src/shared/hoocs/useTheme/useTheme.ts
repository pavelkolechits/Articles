import { useContext } from "react";
import { Theme, ThemeContext } from "../../lib/ThemeContext/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "shared/consts/localStorage";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}


export function useTheme(): UseThemeResult {

    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {

        const newTheme = theme === 'normal' ? 'dark' : 'normal'
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}