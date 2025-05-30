import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CommentList.module.scss'
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment'

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean
}

export const CommentList = (props: CommentListProps ) => {

    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    return (
        <div className={classNames( cls.CommentList , {}, [className])}>
            {comments?.length ? 
                comments.sort((a, b) => Number(b.id) - Number(a.id)).flatMap((comment) => {
                    return <CommentCard key={comment.id} comment={comment}/>
                })
                : <Text text={t('Comments not found')}/>
            }
           
        </div>
    )
}