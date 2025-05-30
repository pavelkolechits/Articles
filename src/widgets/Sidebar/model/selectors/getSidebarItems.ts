import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User"
import {
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    getRouteArticleList,
    getRouteCreateArticle,
    getRouteArticlePreview
} from "shared/consts/router"
import { SidebarItemType } from "../types/sidebar"
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import ProfileIcon from 'shared/assets/icons/profileIcon.svg'
import ArticlesIcon from 'shared/assets/icons/articlesIcon.svg'
import CreateArticleIcon from 'shared/assets/icons/createArticleIcon.svg'
import PreviewArticleIcon from 'shared/assets/icons/preview.svg'

export const getSidebarItems = createSelector(getUserAuthData,
    (userData) => {

        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'main',
                Icon: MainIcon
            },
            {
                path: getRouteAbout(),
                text: 'about',
                Icon: AboutIcon
            }
        ]
        if (userData) {
            sidebarItemList.push({
                path: getRouteProfile(String(userData.user.id)),
                text: 'profile',
                Icon: ProfileIcon
            },
            {
                path: getRouteArticleList(),
                text: 'articles',
                Icon: ArticlesIcon
            },
            {
                path: getRouteCreateArticle(),
                text: 'create article',
                Icon: CreateArticleIcon
            },
            {
                path: getRouteArticlePreview(),
                text: 'preview article',
                Icon: PreviewArticleIcon
            }
            )
        }
        return sidebarItemList
    }
)