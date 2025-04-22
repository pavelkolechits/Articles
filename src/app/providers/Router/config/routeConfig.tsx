import { AboutPage } from "pages/AboutPage"
import { ArticleListPage } from "pages/ArticleListPage"
import { ArticlePage } from "pages/ArticlePage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"
import {
    AppRoutes,
    getRouteAbout,
    getRouteArticle,
    getRouteArticleList,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile
} from "shared/consts/router"


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}


export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE_LIST]: {
        path: getRouteArticleList(),
        element: <ArticleListPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLE]: {
        path: getRouteArticle(':id'),
        element: <ArticlePage />,
        authOnly: true
    }

}