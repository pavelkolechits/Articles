import { EntityId, EntityState } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { ArticleView, IArticle } from 'entities/Article/model/types/article';

export interface ArticleListPageSchema extends EntityState<IArticle, string | number> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    page: number;
    hasMore: boolean
    limit?: number
}