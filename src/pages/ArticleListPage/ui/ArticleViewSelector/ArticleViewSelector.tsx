import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article/model/types/article'
import ListIcon from 'shared/assets/icons/viewList.svg'
import TileIcon from 'shared/assets/icons/viewTile.svg'
import { Button } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'


interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void
}

interface ViewType {
    view: ArticleView;
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const viewTypes: Array<ViewType> = [
    {
        view: 'list',
        icon: ListIcon
    },
    {
        view: 'tile',
        icon: TileIcon
    }
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {

    const { className, view, onViewClick } = props
    const { t } = useTranslation()

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    key={viewType.view} onClick={onClick(viewType.view)}
                    theme='clear'>
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    )
}