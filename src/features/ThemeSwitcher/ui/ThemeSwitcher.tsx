import { classNames } from 'shared/helpers/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useTheme } from 'shared/hoocs/useTheme/useTheme'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
import cls from './ThemeSwitcher.module.scss'
import { memo } from 'react'



interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {

    const { className } = props
    const { toggleTheme } = useTheme()

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
})