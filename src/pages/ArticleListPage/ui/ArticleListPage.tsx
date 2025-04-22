/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'


interface ArticleListPageProps {
    className?: string
}

const ArticleListPage = (props: ArticleListPageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            ARTICLE LIST
        </div>
    )
}

export default ArticleListPage