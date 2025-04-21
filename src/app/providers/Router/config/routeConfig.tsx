import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"
import { AppRoutes, getRouteAbout, getRouteMain, getRouteNotFound, getRouteProfile } from "shared/consts/router"


export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.NOT_FOUND]: '*'
}

export type  AppRouteProps  = RouteProps & {
    authOnly?: boolean
}


export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage/>
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id') ,
        element: <ProfilePage/>,
        authOnly: true
    }

}