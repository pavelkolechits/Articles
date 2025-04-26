import { ArticleBlock, ArticleType, IArticle } from "entities/Article";
import { ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from "entities/Article/model/types/article";



interface ArticleTextBlockDraft extends ArticleTextBlock {
    pharagraph: string
}

export interface CreateArticleSchema {
    isLoading?: boolean;
    error?: string;
    article: {
        title: string;
        subtitle: string;
        type: ArticleType[];
        blocks: ArticleBlock[] | [];
        textBlockDraft:{
            block: ArticleTextBlock,
            pharagraph: string
        } 
        imgBlockDraft: ArticleImageBlock;
        codeBlockDraft: ArticleCodeBlock 
    }
}
