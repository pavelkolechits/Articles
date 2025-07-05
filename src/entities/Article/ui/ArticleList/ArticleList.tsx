import { ArticleView, IArticle } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from './ArticleList.module.scss'
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";


interface ArticleListProps {
    className?: string
    articles: IArticle[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view: ArticleView
}

// const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
//     .fill(0)
//     .map((item, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
//     ));

export const ArticleList = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className, articles, isLoading,  target, view
    } = props;

    return (

        <div
            className={classNames(cls.ArticleList, {}, [ view === 'list' ? cls.list : cls.tile, 
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
        </div>

    );
};