import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateArticleSchema } from '../types/createArticleSchema'
import { ArticleType } from 'entities/Article'
import { ArticleBlockType, ArticleTextBlock } from 'entities/Article/model/types/article'
import { ArticleHeaderResponse, createArticleTemplate } from '../services/createArticleTemplate/createArticleTemplate'
import { title } from 'process'

const initialState: CreateArticleSchema = {
    article: {
        userId: '',
        image: '',
        title: '',
        subtitle: '',
        type: [],
        blocks: [],
        textBlockDraft: {
            type: ArticleBlockType.TEXT,
            title: '',
            id: '',
            text: ''
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
    },

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
        setText: (state, action: PayloadAction<string>) => {
            const text = action.payload
            const resText = text.replace('\n', '<br/>')
            state.article.textBlockDraft.text = resText
        },
        setTextTitle: (state, action: PayloadAction< {title: string, id: string}>) => {
            const block = state.article.blocks.find(
                block => block.id === action.payload.id
            ) as ArticleTextBlock
            block.title = action.payload.title

        },
        saveTextBlock: (state) => {
            state.article.blocks = [...state.article.blocks, state.article.textBlockDraft]
        },
        deleteTextBlock: (state, action: PayloadAction<string>) => {
            const filtredBlocks =  state.article.blocks.filter(block =>  block.id !== action.payload)
            state.article.blocks = filtredBlocks
        },
        addTextBlock: (state) => {
            const id = Date.now()
            
            state.article.blocks = [...state.article.blocks, {
                type: ArticleBlockType.TEXT,
                title: '',
                id: String(id),
                text: ''
            } as ArticleTextBlock]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            createArticleTemplate.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            createArticleTemplate.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            createArticleTemplate.fulfilled, (state, action: PayloadAction<ArticleHeaderResponse>) => {
                state.isLoading = false
                state.error = undefined
                state.article = {
                    ...state.article,
                    ...action.payload
                }
            }
        )
    }
})

export const { reducer: createArticleReducer, actions: createArticleActions } = createArticleSlice