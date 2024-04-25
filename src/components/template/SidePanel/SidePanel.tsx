import classNames from 'classnames'
import { HiOutlineCog } from 'react-icons/hi'
import SidePanelContent, { SidePanelContentProps } from './SidePanelContent'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import { setPanelExpand, useAppDispatch } from '@/store'
import type { CommonProps } from '@/@types/common'

type SidePanelProps = SidePanelContentProps & CommonProps

const _SidePanel = (props: SidePanelProps) => {
    const dispatch = useAppDispatch()

    const { className, ...rest } = props

    const openPanel = () => {
        dispatch(setPanelExpand(true))
    }


    return (
        <>
            <div>
            </div>
        </>
    )
}

const SidePanel = withHeaderItem(_SidePanel)

export default SidePanel
