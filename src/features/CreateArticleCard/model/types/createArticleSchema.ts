import { ArticleBlock, ArticleType, IArticle } from "entities/Article";
import { ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from "entities/Article/model/types/article";



export interface CreateArticleSchema {
    isLoading?: boolean;
    error?: string;
    article: {
        userId: string
        title: string;
        subtitle: string;
        image: string;
        type: ArticleType[] ;
        blocks: ArticleBlock[] | [];
        textBlockDraft:ArticleTextBlock;
        imgBlockDraft: ArticleImageBlock;
        codeBlockDraft: ArticleCodeBlock
    }
}
