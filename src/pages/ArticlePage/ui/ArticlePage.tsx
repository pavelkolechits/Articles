import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Article } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'


interface ArticlePageProps {
    className?: string
}

const ArticlePage = (props: ArticlePageProps) => {

    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{id: string}>()
    
    if(!id) {
        return <Text title='Article not found'/>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Article id={id}/>
        </div>
    )
}

export default ArticlePage