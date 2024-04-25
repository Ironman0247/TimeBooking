import classNames from 'classnames'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import Dropdown from '@/components/ui/Dropdown'
import { HiOutlineSearch } from 'react-icons/hi'

const _Example = () => {
    return (
        <Dropdown
            renderTitle={<HiOutlineSearch className={classNames('text-4xl')} />}
        >
        </Dropdown>
    )
}

const Example = withHeaderItem(_Example)

export default Example
