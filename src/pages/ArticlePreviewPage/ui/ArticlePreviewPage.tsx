import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticlePreview } from 'features/CreateArticleCard'
import { Page } from 'widgets/Page/Page'

interface ArticlePreviewPageProps {
    className?: string
}

const ArticlePreviewPage = (props: ArticlePreviewPageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            <ArticlePreview />
        </Page>
    )
}

export default ArticlePreviewPage