import { Profile } from "entities/Profile";

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC',
    ALL = 'ALL'
}

export type ArticleView = 'tile' | 'list'

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    text: string;
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface IArticle {
      id: string;
      title: string;
      subtitle: string;
      image: string;
      views: number;
      createdAt: string;
      type: ArticleType[],
      blocks: ArticleBlock[],
      author: Partial<Profile>
}