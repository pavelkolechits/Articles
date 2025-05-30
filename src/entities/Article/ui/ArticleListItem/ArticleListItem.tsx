
import cls from './ArticleListItem.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eyeIcon.svg';
import { IArticle, ArticleTextBlock, ArticleView, ArticleBlockType } from '../../model/types/article';
import { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { getRouteArticle } from 'shared/consts/router';


export interface ArticleListItemProps {
    className?: string;
    article: IArticle;
    target?: HTMLAttributeAnchorTarget;
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { article, className, view = 'list' } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(getRouteArticle(article.id));
    }, [article.id, navigate]);

    if (view === 'list') {
        // const textBlock = article.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticlleListItem, {}, [className, cls[view]])}>
                <Card theme='outlined' className={cls.card}>
                    <div className={cls.header}>
                        <Avatar alt="/" size={30} src={article?.author.avatar} />
                        <Text
                            text={`${article?.author.firstname} ${article.author.lastname}`}
                            className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text className={cls.types} text={article.type.join(',')} />
                    <img src={article.image} className={cls.img} alt={article.title} />
                    {/* {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />} */}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme='outline'>{t('Читать далее...')}</Button>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticlleListItem, {}, [className])}>
            <Card theme='outlined' onClick={onOpenArticle} className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.image} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text className={cls.types} text={article.type.join(',')} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
};