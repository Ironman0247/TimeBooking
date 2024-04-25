import reducer from './store'
import { injectReducer } from '@/store'
import UserDashboard from './components/SalesDashboardHeader'
import SalesDashboardBody from './components/SalesDashboardBody'

injectReducer('salesDashboard', reducer)

const SalesDashboard = () => {
    return (
        <div className="flex flex-col gap-4 h-full">
            <UserDashboard />
            <SalesDashboardBody />
        </div>
    )
}

export default SalesDashboard
