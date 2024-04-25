import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Chart from '@/components/shared/Chart'
import { COLORS } from '@/constants/chart.constant'

type SalesByCategoriesProps = {
    data?: {
        labels: string[]
        data: number[]
    }
}

const SalesByCategories = ({
    data = { labels: [], data: [] },
}: SalesByCategoriesProps) => {
    return (
        ""
    )
}

export default SalesByCategories
