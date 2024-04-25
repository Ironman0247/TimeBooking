import View from '@/views'
import SidePanel from '@/components/template/SidePanel'
import { setPanelExpand, useAppSelector, useAppDispatch } from '@/store'
import { HiOutlineCog } from 'react-icons/hi'
import classNames from 'classnames'

const ConfiguratorToggle = () => {
    const dispatch = useAppDispatch()
    const themeColor = useAppSelector((state) => state.theme.themeColor)
    const primaryColorLevel = useAppSelector(
        (state) => state.theme.primaryColorLevel
    )

    return (
        <div>
            {/* <HiOutlineCog /> */}
        </div>
    )
}

const BlankLayout = () => {
    return (
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
            <View />
            <ConfiguratorToggle />
            <SidePanel className="hidden" />
        </div>
    )
}

export default BlankLayout
