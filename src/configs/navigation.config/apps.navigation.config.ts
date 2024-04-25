import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'apps',
        path: '',
        title: '',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [USER],
        subMenu: [
            {
                key: 'appsLocation.location',
                path: `${APP_PREFIX_PATH}/Location/location`,
                title: 'Үсчингийн Байршил',
                translateKey: 'nav.appsLocation.location',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [USER],
                subMenu: [],
            },
            {
                key: 'apps.service',
                path: '',
                title: 'Үйлчилгээнүүд',
                translateKey: 'nav.appsService.service',
                icon: 'svs',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [USER],
                subMenu: [
                    {
                        key: 'appsService.service',
                        path: `${APP_PREFIX_PATH}/svs/service`,
                        title: 'Үйлчилгээ',
                        translateKey: 'nav.appsService.service',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsCrm.calendar',
                        path: `${APP_PREFIX_PATH}/crm/calendar`,
                        title: 'Календар',
                        translateKey: 'nav.appsCrm.calendar',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [USER],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'apps.account',
                path: '',
                title: 'Бүртгэлийн тохиргоо',
                translateKey: 'nav.appsAccount.account',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'appsAccount.settings',
                        path: `${APP_PREFIX_PATH}/account/settings/profile`,
                        title: 'Тохиргоо',
                        translateKey: 'nav.appsAccount.settings',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsAccount.kycForm',
                        path: `${APP_PREFIX_PATH}/account/kyc-form`,
                        title: 'Нэмэлт мэдээлэл',
                        translateKey: 'nav.appsAccount.kycForm',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default appsNavigationConfig
