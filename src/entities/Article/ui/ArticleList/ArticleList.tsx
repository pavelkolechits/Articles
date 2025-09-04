import { ArticleView, IArticle } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from './ArticleList.module.scss'
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Loader } from "shared/ui/Loader/loader/Loader";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";


interface ArticleListProps {
    className?: string
    articles: IArticle[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view: ArticleView
}


export const ArticleList = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className, articles, isLoading, target, view
    } = props;

    const getSkeletons = (view: ArticleView) => new Array(view === 'tile' ? 9 : 4)
        .fill(0)
        .map((item, index) => (
        
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ));

    return (

        <div
            className={classNames(cls.ArticleList, {}, [view === 'list' ? cls.list : cls.tile,
                className,
            ])}
            data-testid="ArticleList"
        >
            {articles.map((item) => (
                <ArticleListItem
                    view={view}
                    article={item}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>

    );
};