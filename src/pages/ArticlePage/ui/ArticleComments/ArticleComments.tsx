import { CommentList } from "entities/Comment/ui/CommentList/CommentList";
import AddNewComment from "features/AddNewComment/ui/AddNewComment";
import { fetchArticleComments } from "../../model/services/fetchArticleComments";
import { useEffect, useCallback, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/helpers/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { getArticleComments } from "../../model/slices/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/commentsSelectors";
import { useAppDispatch } from "shared/hoocs/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/loader/Loader";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import cls from './ArticleComments.module.scss'

interface ArticleCommentsProps {
    className?: string;
    id: string;
}

export const ArticleComments = (props: ArticleCommentsProps) => {
    const { className, id } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchArticleComments(Number(id)));
    }, [dispatch, id]);

    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );
    return (
        <div className={classNames(cls.ArticleComments, {}, [className])}>
            <Text title={t('Comments')} />
            <Suspense fallback={<Loader />}>
                <AddNewComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Suspense>

        </div>
    );
};