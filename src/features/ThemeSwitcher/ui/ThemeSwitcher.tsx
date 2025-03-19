import { classNames } from 'shared/helpers/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useTheme } from 'shared/hoocs/useTheme/useTheme'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
// import LightIcon from 'shared/assets/icons/themeLight.svg'
import cls from './ThemeSwitcher.module.scss'
import Ic from 'shared/assets/icons/aboutIcon.svg'


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const { className } = props

    const { theme, toggleTheme } = useTheme()
    console.log(theme)

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <DarkIcon
                className={cls.icon}
            />
        </Button>
    )
}