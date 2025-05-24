import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateArticleSchema } from '../types/createArticleSchema'
import { ArticleSchema, ArticleType } from 'entities/Article'
import { ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock, IArticle } from 'entities/Article/model/types/article'
import { ArticleHeaderResponse, createArticleHeader } from '../services/createArticleHeader/createArticleHeader'
import { updateArticleHeader } from '../services/updateArticleHeader/updateArticleHeader'
import { createArticleText } from '../services/createArticleText/createArticleText'
import { updateArticleText } from '../services/updateArticleText.ts/updateArticleText'
import { fetchArticleDraft } from '../services/fetchArticleDraft/fetchArticleDraft'

const initialState: CreateArticleSchema = {
    article: {
        image: '',
        title: '',
        subtitle: '',
        type: [],
        blocks: [],
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

        setText: (state, action: PayloadAction<{ text: string, id: string }>) => {
            const block = state.article.blocks.find(
                block => block.id === action.payload.id
            ) as ArticleTextBlock
            block.text = action.payload.text
        },

        setCode: (state, action: PayloadAction<{ code: string, id: string }>) => {
            const code = action.payload.code
            const resCode = code.replace('\n', '<br/>')
    
            const block = state.article.blocks.find(
                block => block.id === action.payload.id
            )

            if( block?.type === ArticleBlockType.CODE ) {
                block.code = resCode
            }
            
        },
        setTextTitle: (state, action: PayloadAction<{ title: string, id: string }>) => {
            const block = state.article.blocks.find(
                block => block.id === action.payload.id
            ) as ArticleTextBlock
            block.title = action.payload.title
        },
        setImgTitle: (state, action: PayloadAction<{ title: string, id: string }>) => {
            const block = state.article.blocks.find(
                block => block.id === action.payload.id
            ) as ArticleImageBlock
            block.title = action.payload.title
        },
        deleteBlock: (state, action: PayloadAction<string>) => {
            const filtredBlocks = state.article.blocks.filter(block => block.id !== action.payload)
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
        },
        addImgBlock: (state) => {
            const id = Date.now()

            state.article.blocks = [...state.article.blocks, {
                type: ArticleBlockType.IMAGE,
                title: '',
                id: String(id),
                src: '/'
            } as ArticleImageBlock]
        },
        addCodeBlock: (state) => {
            const id = Date.now()

            state.article.blocks = [...state.article.blocks, {
                type: ArticleBlockType.CODE,
                id: String(id),
                code: ''
            } as ArticleCodeBlock]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            createArticleHeader.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            createArticleHeader.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            createArticleHeader.fulfilled, (state, action: PayloadAction<ArticleHeaderResponse>) => {
                state.isLoading = false
                state.error = undefined
                state.article = {
                    ...state.article,
                    ...action.payload
                }
            }
        ),
        builder.addCase(
            fetchArticleDraft.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            fetchArticleDraft.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            fetchArticleDraft.fulfilled, (state, action: PayloadAction<IArticle>) => {
                state.isLoading = false
                state.error = undefined
                state.article = action.payload
        
            }
        ),
        
        builder.addCase(
            updateArticleHeader.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            updateArticleHeader.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            updateArticleHeader.fulfilled, (state, action: PayloadAction<ArticleHeaderResponse>) => {
                state.isLoading = false
                state.error = undefined
                state.article = {
                    ...state.article,
                    ...action.payload
                }
            }
        ),
        builder.addCase(
            createArticleText.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            createArticleText.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            createArticleText.fulfilled, (state, action: PayloadAction<ArticleTextBlock>) => {
                const udatedBlocks = state.article.blocks.map(
                    (block) => block.id === action.payload.id ? action.payload : block)
                state.article.blocks = udatedBlocks
            }
        ),
        builder.addCase(
            updateArticleText.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            updateArticleText.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            updateArticleText.fulfilled, (state, action: PayloadAction<ArticleTextBlock>) => {
                const udatedBlocks = state.article.blocks.map(
                    (block) => block.id === action.payload.id ? action.payload : block)
                state.article.blocks = udatedBlocks
            }
        )
    }
})

export const { reducer: createArticleReducer, actions: createArticleActions } = createArticleSlice