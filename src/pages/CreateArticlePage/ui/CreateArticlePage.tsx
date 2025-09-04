import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { CreateArticleCard } from 'features/CreateArticleCard'
import { Page } from 'shared/ui/Page/Page'

interface CreateArticlePageProps {
    className?: string
}

const CreateArticlePage = (props: CreateArticlePageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            <CreateArticleCard/>
        </Page>
    )
}


export default CreateArticlePage