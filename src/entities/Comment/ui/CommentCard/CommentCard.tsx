import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'
import { getRouteProfile } from 'shared/consts/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {

    const { className, comment, isLoading } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>

            {/* 
            <AppLink to={getRouteProfile(comment.userId)} className={cls.header}>
                {comment?.user.avatar
                    ? (
                        <Avatar
                            src={comment?.user.avatar}
                            alt=""
                            size={30}
                        />
                    )
                    : null}
                <Text className={cls.username} text={comment?.user.username} />
            </AppLink> */}
            <Text className={cls.text} text={comment?.text} />

        </div>
    )
}