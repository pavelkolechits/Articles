export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    ARTICLE = 'article',
    ARTICLE_LIST = 'article_list',
    CREATE_ARTICLE = 'create_article'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteNotFound = () => '*'
export const getRouteArticle = (id: string) => `/articles/${id}`
export const getRouteArticleList = () => '/articles'
export const getRouteCreateArticle = () => '/create_article'
