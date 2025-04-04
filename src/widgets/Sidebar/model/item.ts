import { AppRoutes, RoutePath } from "app/providers/Router/config/routeConfig";
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import ProfileIcon from 'shared/assets/icons/profileIcon.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}


export const sidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'about',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon
    }
]