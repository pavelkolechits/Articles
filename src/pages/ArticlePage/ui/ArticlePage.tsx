import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'


interface ArticlePageProps {
    className?: string
}

const ArticlePage = (props: ArticlePageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            ARTICLE
        </div>
    )
}

export default ArticlePage