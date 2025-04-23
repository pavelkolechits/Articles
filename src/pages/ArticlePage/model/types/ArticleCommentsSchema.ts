import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleComment extends Comment {
    articleId: string
}

export interface ArticleCommentsSchema extends EntityState<ArticleComment, string> {
    isLoading?: boolean;
    error?: string;
}
