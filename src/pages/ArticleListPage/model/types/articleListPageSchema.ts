import { EntityId, EntityState } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { ArticleView, IArticle } from 'entities/Article/model/types/article';
import { SortField, SortOrder } from 'shared/types/sort';



export interface ArticleListPageSchema extends EntityState<IArticle, string | number> {
    isLoading?: boolean;
    error?: string;
    page: number;
    hasMore: boolean
    limit: number;
    
    view: ArticleView;
    order: SortOrder;
    sort: SortField;
    search: string

    _inited: boolean;
}