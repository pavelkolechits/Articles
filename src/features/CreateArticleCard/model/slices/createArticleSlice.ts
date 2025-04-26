import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateArticleSchema } from '../types/createArticleSchema'
import { ArticleType } from 'entities/Article'
import { ArticleBlockType, ArticleTextBlock } from 'entities/Article/model/types/article'

const initialState: CreateArticleSchema = {
    article: {
        title: '',
        subtitle: '',
        type: [],
        blocks: [],
        textBlockDraft: {
            block: {
                type: ArticleBlockType.TEXT,
                title: '',
                paragraphs: [],
                id: ''
            },
            pharagraph: '',
        },
        imgBlockDraft: {
            type: ArticleBlockType.IMAGE,
            id: '',
            src: '',
            title: ''
        },
        codeBlockDraft: {
            type: ArticleBlockType.CODE,
            code: '',
            id: ''
        }
    }
}

const createArticleSlice = createSlice({
    name: 'createArticleSlice',
    initialState,
    reducers: {
        setArticleTitle: (state, action: PayloadAction<string>) => {
            state.article.title = action.payload
        },
        setArticleSubtitle: (state, action: PayloadAction<string>) => {
            state.article.subtitle = action.payload

        },
        setArticleType: (state, action: PayloadAction<string>) => {
            state.article.type.push(action.payload as ArticleType)
        },
        setTextPharagraph: (state, action: PayloadAction<string>) => {
            state.article.textBlockDraft.pharagraph = action.payload
        },
        addPharagraph: (state, action: PayloadAction<string>) => {
            state.article.textBlockDraft.block.paragraphs.push(action.payload)
        },
        setTextTitle: (state, action: PayloadAction<string>) => {
            state.article.textBlockDraft.block.title = action.payload

        },
        saveTextBlock: (state) => {
            state.article.blocks = [...state.article.blocks, state.article.textBlockDraft.block]
        }
    }
})

export const { reducer: createArticleReducer, actions: createArticleActions } = createArticleSlice