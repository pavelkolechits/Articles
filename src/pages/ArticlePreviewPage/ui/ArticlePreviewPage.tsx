import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticlePreview } from 'features/CreateArticleCard'

interface ArticlePreviewPageProps {
    className?: string
}

const ArticlePreviewPage = (props: ArticlePreviewPageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            <ArticlePreview />
        </div>
    )
}

export default ArticlePreviewPage