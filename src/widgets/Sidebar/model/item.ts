import { RoutePath } from "app/providers/Router/config/routeConfig";
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import ProfileIcon from 'shared/assets/icons/profileIcon.svg'
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { getRouteAbout, getRouteMain, getRouteProfile } from "shared/consts/router";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

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
            })
        }
        return sidebarItemList
    }
)

