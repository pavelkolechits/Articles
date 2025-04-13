import { AppRoutes, RoutePath } from "app/providers/Router/config/routeConfig";
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import ProfileIcon from 'shared/assets/icons/profileIcon.svg'
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const getSidebarItems = createSelector(getUserAuthData,
    (userData) => {

        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'main',
                Icon: MainIcon
            },
            {
                path: RoutePath.about,
                text: 'about',
                Icon: AboutIcon
            }
        ]
        if (userData) {
            sidebarItemList.push({
                path: RoutePath.profile + userData.user.id,
                text: 'profile',
                Icon: ProfileIcon
            })
        }
        return sidebarItemList
    }
)

