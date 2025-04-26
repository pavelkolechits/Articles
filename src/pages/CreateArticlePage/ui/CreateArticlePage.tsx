import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { CreateArticleCard } from 'features/CreateArticleCard'

interface CreateArticlePageProps {
    className?: string
}

const CreateArticlePage = (props: CreateArticlePageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            <CreateArticleCard/>
        </div>
    )
}


export default CreateArticlePage